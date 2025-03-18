import { Injectable, NotFoundException } from '@nestjs/common';
import { Mentorship } from './entities/mentorship.entity';
import { MentorshipRepository } from './mentorship.repository';
import { BaseService } from 'src/common/shared/base.service';
import { PersonalInfoService } from '../personal-info/personal-info.service';
import { CreateMentorshipDto } from './dto/create-mentorship.dto';

@Injectable()
export class MentorshipService extends BaseService<Mentorship> {
  constructor(
    readonly mentorshipRepository: MentorshipRepository,
    private readonly personalInfoService: PersonalInfoService
  ) {
    super(mentorshipRepository)
  }

  async createMentorship(dto: CreateMentorshipDto) {
    const personalInfo = await this.personalInfoService.findOneById(dto.personalInfoId)
    if (!personalInfo) throw new NotFoundException('Personal info not found')
    const created = this.mentorshipRepository.create({ ...dto, personalInfo })
    return await this.mentorshipRepository.save(created)
  }
}
