import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/common/shared/base.service';
import { ResearchProject } from './entities/research-project.entity';
import { ResearchProjectsRepository } from './research-projects.repository';
import { PersonalInfoService } from '../personal-info/personal-info.service';
import { CreateResearchProjectDto } from './dto/create-research-project.dto';

@Injectable()
export class ResearchProjectsService extends BaseService<ResearchProject> {
  constructor(
    readonly researchProjectRepository: ResearchProjectsRepository,
    private readonly personalInfoService: PersonalInfoService
  ) { super(researchProjectRepository) }

  async createResearchProject(dto: CreateResearchProjectDto) {
    const personalInfo = await this.personalInfoService.findOneById(dto.personalInfoId)
    if (!personalInfo) throw new NotFoundException('Personal info not found')
    const created = this.researchProjectRepository.create({ ...dto, personalInfo })
    return await this.researchProjectRepository.save(created)
  }
}
