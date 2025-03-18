import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/common/shared/base.service';
import { ParacticalApplication } from './entities/paractical-application.entity';
import { ParticalApplicationsRepository } from './paractical-applicaitions.repository';
import { PersonalInfoService } from '../personal-info/personal-info.service';
import { CreateParacticalApplicationDto } from './dto/create-paractical-application.dto';
@Injectable()
export class ParacticalApplicationsService extends BaseService<ParacticalApplication> {
  constructor(
    readonly repository: ParticalApplicationsRepository,
    private readonly personalInfoService: PersonalInfoService
  ) { super(repository) }

  async createOaractucalApplication(dto: CreateParacticalApplicationDto) {
    const personalInfo = await this.personalInfoService.findOneById(dto.personalInfoId)
    if (!personalInfo) throw new NotFoundException('Personal info not found')
    const created = this.repository.create({ ...dto, personalInfo })
    return await this.repository.save(created)
  }
}
