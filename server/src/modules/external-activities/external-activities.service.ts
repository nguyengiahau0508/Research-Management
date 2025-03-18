import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/common/shared/base.service';
import { ExternalActivity } from './entities/external-activity.entity';
import { ExternalActivitiesRepository } from './external-activities.repository';
import { CreateExternalActivityDto } from './dto/create-external-activity.dto';
import { PersonalInfoService } from '../personal-info/personal-info.service';
@Injectable()
export class ExternalActivitiesService extends BaseService<ExternalActivity> {
  constructor(
    private readonly externalActivitiesRepository: ExternalActivitiesRepository,
    private readonly personalInfoSerivce: PersonalInfoService,
  ) { super(externalActivitiesRepository); }

  // Create external activity
  async createExternalActivity(dto: CreateExternalActivityDto): Promise<ExternalActivity> {
    const personalInfo = await this.personalInfoSerivce.findOneById(dto.personalInfoId);
    if (!personalInfo) {
      throw new NotFoundException('Personal info not found');
    }
    const createdExternalActivity = this.externalActivitiesRepository.create({ ...dto, personalInfo });
    return await this.externalActivitiesRepository.save(createdExternalActivity);
  }
}
