import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/common/shared/base.service';
import { Certification } from './entities/certification.entity';
import { CertificationRepository } from './certification.repository';
import { PersonalInfoService } from '../personal-info/personal-info.service';
import { CreateCertificationDto } from './dto/create-certification.dto';

@Injectable()
export class CertificationService extends BaseService<Certification> {
  constructor(
    readonly repository: CertificationRepository,
    private readonly personalInfoService: PersonalInfoService
  ) { super(repository) }

  async createCertification(dto: CreateCertificationDto): Promise<Certification> {
    const personalInfo = await this.personalInfoService.findOneById(dto.personalInfoId);
    if (!personalInfo) {
      throw new NotFoundException('Personal Info not found');
    }
    const created = this.repository.create({
      ...dto,
      personalInfo
    });

    return this.repository.save(created);
  }
}

