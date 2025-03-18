import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/common/shared/base.service';
import { ContactInfo } from './entities/contact-info.entity';
import { ContactInfoRepository } from './contact-info.repository';
import { PersonalInfoService } from '../personal-info/personal-info.service';
import { CreateContactInfoDto } from './dto/create-contact-info.dto';

@Injectable()
export class ContactInfoService extends BaseService<ContactInfo> {
  constructor(
    readonly contactInfoRepository: ContactInfoRepository,
    private readonly personalInfoService: PersonalInfoService
  ) { super(contactInfoRepository) }

  async createContactInfo(contactInfo: CreateContactInfoDto): Promise<ContactInfo> {
    const personalInfo = await this.personalInfoService.findOneById(contactInfo.personalInfoId);

    if (!personalInfo) {
      throw new NotFoundException('Personal Info not found');
    }

    const newContactInfo = this.contactInfoRepository.create({
      ...contactInfo,
      personalInfo
    });
    return this.contactInfoRepository.save(newContactInfo);
  }
}
