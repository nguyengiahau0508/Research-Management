import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/common/shared/base.service';
import { Publication } from './entities/publication.entity';
import { PublicationsRepository } from './publications.repository';
import { PersonalInfoService } from '../personal-info/personal-info.service';
import { CreatePublicationDto } from './dto/create-publication.dto';

@Injectable()
export class PublicationsService extends BaseService<Publication> {
  constructor(
    readonly repository: PublicationsRepository,
    private readonly personalInfoService: PersonalInfoService
  ) { super(repository) }

  async createPublication(dto: CreatePublicationDto) {
    const personalInfo = await this.personalInfoService.findOneById(dto.personalInfoId)
    if (!personalInfo) throw new NotFoundException('Personal info not found');
    const created = this.repository.create({ ...dto, personalInfo })
    return await this.repository.save(created)
  }
}
