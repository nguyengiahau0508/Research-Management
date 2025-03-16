import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { Roles } from "src/common/decorator/roles.decorator";
import { Role } from "src/common/enums/role.enum";
import { StudentsService } from "./students.service";
import { Status } from "src/common/enums/status.enum";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Request } from "express";
import { CreateStudentDto } from "./dto/create-student.dto";
import { Student } from "./entities/student.entity";

@Controller('students')
export class StudentsController {
  constructor(
    private readonly studentsService: StudentsService
  ) { }

  @Post()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  async createAndSave(@Body() dto: CreateStudentDto) {
    const created = this.studentsService.create(dto)
    const saved = await this.studentsService.save(created)

    if (saved.status === Status.APPROVED)
      this.studentsService.sendNotfitication(saved)

    return {
      data: saved
    }
  }

  @Get()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  async getAll() {
    return {
      data: await this.studentsService.findAll()
    }
  }

  @Get(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  async getStudentById(@Param('id') id: string) {
    return {
      data: await this.studentsService.findByCondition({
        where: {
          id: id
        },
        relations: ['department', 'traningProgram']
      })
    }
  }

  @Get('status/pending')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  async findPendingStudents() {
    return {
      data: await this.studentsService.findAll({ where: { status: Status.PENDING } })
    }
  }

  @Get('profile')
  @Roles(Role.STUDENT)
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req: Request) {
    return {
      data: req.user
    }
  }

  @Post(':id/approve')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  async approveStudentAccount(@Param('id') id: string) {
    return { data: await this.studentsService.approveStudentAccount(id) }
  }

  @Patch()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  async updateStudent(@Body() dto: Student) {
    const studentEntity = await this.studentsService.preload(dto)
    const saved = await this.studentsService.save(studentEntity)

    if (saved.status === Status.APPROVED) {
      this.studentsService.sendNotfitication(saved)
    }

    return {
      data: saved
    }
  }
}
