import { Body, Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common"
import { AuthService } from "./auth.service";
import { RegisterStudentAuthDto } from "./dto/register-student-auth.dto";
import { AuthGuard } from "@nestjs/passport";
import { Role } from "src/common/enums/role.enum";
import { Response } from "express";
import { extractStudentId, isValidStudentEmail } from "src/common/helpers/auth/email.util";
import { Status } from "src/common/enums/status.enum";
import { JwtAuthGuard } from "./guard/jwt-auth.guard";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) { }

  // Utility method to set authentication cookies
  private setAuthCookies(res: Response, tokens: { accessToken: string }) {
    res.cookie('accessToken', tokens.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
  }

  @Post('student')
  async registerStudent(@Body() registerStudentAuthDto: RegisterStudentAuthDto, @Res() res: Response) {
    await this.authService.registerStudent(registerStudentAuthDto);
    return res.render('auth/approval-notice');
  }

  @Get(`google`)
  @UseGuards(AuthGuard('google'))
  async authenticateWithGoogle() {
  }

  @Get(`google/callback`)
  @UseGuards(AuthGuard('google'))
  async googleCallback(@Req() req, @Res() res: Response) {
    const { email, familyName, givenName } = req.user
    const role: Role = await this.authService.getRoleFromEmail(email)
    if (role == Role.UNKNOWN) {
      if (isValidStudentEmail(email)) {
        return res.render('auth/student-register', {
          email,
          studentId: extractStudentId(email),
          familyName,
          givenName
        });
      }
      return res.render('auth/error');
    }

    if (role == Role.ADMIN) {
      const token = await this.authService.loginAdmin(email)
      this.setAuthCookies(res, token)
      return res.redirect('http://localhost:4200/dashboard');
    }

    if (role == Role.STUDENT) {
      const studentStatus: Status = await this.authService.getStatusStudentAccount(email)
      if (studentStatus == Status.PENDING) return res.render('auth/approval-notice');
      const token = await this.authService.loginStudent(email)
      this.setAuthCookies(res, token)
      return res.redirect('http://localhost:4300/dashboard');
    }

    if (role == Role.LECTURER) {
      const token = await this.authService.loginLecturer(email)
      this.setAuthCookies(res, token)
      return res.redirect('http://localhost:4400/dashboard');
    }

    return res.render('auth/error');
  }

  @Get(`google/is-login`)
  @UseGuards(JwtAuthGuard)
  async isLogin(@Req() req) {
    if (req.user) return { data: { isLoggedIn: true } }
    return { data: { isLoggedIn: false } }
  }
}
