import { Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { Roles } from "src/common/decorator/roles.decorator";
import { Role } from "src/common/enums/role.enum";
import { StudentsService } from "./students.service";
import { Status } from "src/common/enums/status.enum";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";

@Controller('students')
export class StudentsController {
  constructor(
    private readonly studentsService: StudentsService
  ) { }

  @Get('status/pending')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  async findPendingStudents() {
    return {
      data: await this.studentsService.findAll({ where: { status: Status.PENDING } })
    }
  }

  @Post(':id/approve')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  async approveStudentAccount(@Param('id') id: string) {
    return { data: await this.studentsService.approveStudentAccount(id) }
  }
}
