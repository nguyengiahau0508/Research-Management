import { Injectable } from "@nestjs/common";
import { BaseService } from "src/common/shared/base.service";
import { ResearchTopic } from "./entities/research-topic.entity";
import { ResearchTopicRepository } from "./research-topic.repository";
import { RegisterFacultyResearchTopicDto } from "./dto/register-faculty-research-topic.dto";
import { Student } from "../students/entities/student.entity";
import { MailerService } from "@nestjs-modules/mailer";
import { formatDateToVn } from "src/common/utils/times.util";
import { StudentsService } from "../students/students.service";
import { Status } from "src/common/enums/status.enum";

@Injectable()
export class ResearchTopicsService extends BaseService<ResearchTopic> {
  constructor(
    private readonly researchTopicRepository: ResearchTopicRepository,
    private readonly mailerService: MailerService,
    private readonly studentsService: StudentsService
  ) {
    super(researchTopicRepository)
  }

  async registerFacultyResourceTopic(dto: RegisterFacultyResearchTopicDto) {
    const created = this.researchTopicRepository.create(dto)
    return this.researchTopicRepository.save(created)
  }

  async approvedFacultyResourseTopic(id: number) {
    const entity = await this.findByCondition({
      where: {
        id
      },
      relations: [
        'user.student',
        'department',
        'researchField',
        'lecturer',
        'researchGroup',
        'outlineFile',
        'acceptanceDocument',
        'registrationPeriod',
        'researchMembers',
      ]
    })
    entity.status = Status.APPROVED
    const saved = await this.researchTopicRepository.save(entity)


    if (saved.user.student) {
      this.sendNotfitication(saved.user.student, saved)
    }

    return saved
  }

  async sendNotfitication(student: Student, researchTopic: ResearchTopic) {
    this.mailerService.sendMail({
      to: student.email,
      subject: 'Đăng ký thanh công Đề xuất đề tài NCKH sinh viên',
      template: 'research_proposal',
      context: {
        studentName: student.fMName + ' ' + student.lastname,
        projectTitle: researchTopic.name,
        year: 2025,
      },
    });
  }
}
