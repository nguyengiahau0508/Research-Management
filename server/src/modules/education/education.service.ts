import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/common/shared/base.service';
import { Education } from './entities/education.entity';
import { EducationRepository } from './education.repository';
import { PersonalInfoService } from '../personal-info/personal-info.service';
import { CreateEducationDto } from './dto/create-education.dto';

@Injectable()
export class EducationService extends BaseService<Education> {
  constructor(
    private readonly educationRepository: EducationRepository,
    private readonly personalInfoService: PersonalInfoService
  ) { super(educationRepository) }

  async createEducation(dto: CreateEducationDto): Promise<Education> {
    const personalInfo = await this.personalInfoService.findOneById(dto.personalInfoId);
    if (!personalInfo) throw new NotFoundException('Personal info not found');

    const createdEducation = this.educationRepository.create({
      ...dto,
      personalInfo
    });

    return this.educationRepository.save(createdEducation);
  }
}
