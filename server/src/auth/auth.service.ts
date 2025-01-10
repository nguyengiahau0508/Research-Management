import { Injectable, NotFoundException } from "@nestjs/common";
import { StudentsService } from "src/modules/students/students.service";
import { RegisterStudentAuthDto } from "./dto/register-student-auth.dto";
import { DepartmentsService } from "src/modules/departments/departments.service";
import { TraningProgramsService } from "src/modules/traning-programs/traning-programs.service";
import { CreateStudentDto } from "src/modules/students/dto/create-student.dto";
import { Role } from "src/common/enums/role.enum";
import { Status } from "src/common/enums/status.enum";
import { JwtService } from "@nestjs/jwt";
import { AdminsService } from "src/modules/admins/admins.service";
import { LecturersServcie } from "src/modules/lecturers/lecturers.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly studentService: StudentsService,
    private readonly departmentService: DepartmentsService,
    private readonly traningProgramService: TraningProgramsService,
    private readonly jwtService: JwtService,
    private readonly adminService: AdminsService,
    private readonly lecturerService: LecturersServcie
  ) { }

  async getRoleFromEmail(email: string): Promise<Role> {
    const student = await this.studentService.findByCondition({ where: { email } });
    if (student) return Role.STUDENT;

    const admin = await this.adminService.findByCondition({ where: { email } })
    if (admin) return Role.ADMIN

    const lecturer = await this.lecturerService.findByCondition({ where: { email } })
    if (lecturer) return Role.LECTURER

    return Role.UNKNOWN;
  }

  async registerStudent(registerStudentDto: RegisterStudentAuthDto) {
    const department = await this.departmentService.findOneById(registerStudentDto.departmentId)
    if (!department) throw new NotFoundException(`Department with ID ${registerStudentDto.departmentId} not found`)

    const traningProgram = await this.traningProgramService.findOneById(registerStudentDto.traningProgramId)
    if (!traningProgram) throw new NotFoundException(`Traning Program with ID ${registerStudentDto.traningProgramId} not found`)

    const createStudentDto: CreateStudentDto = {
      ...registerStudentDto,
      department,
      traningProgram
    }

    const createdStudent = this.studentService.create({
      ...createStudentDto,
      user: {
        role: Role.STUDENT,
        relatedId: createStudentDto.id
      }
    })

    return await this.studentService.save(createdStudent)
  }

  async getStatusStudentAccount(email: string) {
    const student = await this.studentService.findByCondition({ where: { email } })
    return student.status
  }

  async loginStudent(email: string) {
    const student = await this.studentService.findByCondition({ where: { email } })
    if (!student) throw new NotFoundException(`Student with email: ${email} not found`)
    if (student.status == Status.PENDING) return null

    const payload = { sub: student.id, email, roles: [Role.STUDENT] }
    return {
      accessToken: await this.jwtService.signAsync(payload)
    }
  }

  async loginAdmin(email: string) {
    const admin = await this.adminService.findByCondition({ where: { email } })
    if (!admin) throw new NotFoundException(`Admin with email:${email} not found`)

    const payload = { sub: admin.id, email, roles: [Role.ADMIN] }
    return {
      accessToken: await this.jwtService.signAsync(payload)
    }
  }
}
