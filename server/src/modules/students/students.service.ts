import { Injectable, NotFoundException } from "@nestjs/common";
import { Student } from "./entities/student.entity";
import { Status } from "src/common/enums/status.enum";
import { MailerService } from "@nestjs-modules/mailer";
import { formatDateToVn } from "src/common/utils/times.util";
import { BaseService } from "src/common/shared/base.service";
import { StudentRepository } from "./student.repository";

@Injectable()
export class StudentsService extends BaseService<Student> {
  constructor(
    private readonly studentRepository: StudentRepository,
    private readonly mailerService: MailerService
  ) {
    super(studentRepository)
  }

  async approveStudentAccount(studentId: string): Promise<Student> {
    const student = await this.studentRepository.findByCondition({ where: { id: studentId, isDeleted: false } });

    if (!student) throw new NotFoundException(`Student with ID ${studentId} not found.`);
    if (student.status !== Status.PENDING) throw new Error(`Student account is already in status: ${student.status}`);


    student.status = Status.APPROVED;
    student.updatedAt = new Date();

    const saved = await this.studentRepository.save(student);

    this.sendNotfitication(student)
    return saved
  }

  async sendNotfitication(student: Student) {
    this.mailerService.sendMail({
      to: student.email,
      subject: 'Kết quả xác thực tài khoản',
      template: 'student-account-verification',
      context: {
        name: student.fMName + ' ' + student.lastname,
        email: student.email,
        phone: student.phone,
        registrationTime: formatDateToVn(student.createdAt),
      },
    });
  }
}
