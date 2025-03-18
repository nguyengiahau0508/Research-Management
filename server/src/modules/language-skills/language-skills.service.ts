import { Injectable, NotFoundException } from '@nestjs/common';
import { LanguageSkill } from './entities/language-skill.entity';
import { LanguageSkillsRepository } from './language-skills.repository';
import { BaseService } from 'src/common/shared/base.service';
import { CreateLanguageSkillDto } from './dto/create-language-skill.dto';
import { PersonalInfoService } from '../personal-info/personal-info.service';

@Injectable()
export class LanguageSkillsService extends BaseService<LanguageSkill> {
  constructor(
    readonly repository: LanguageSkillsRepository,
    private readonly personalInfoService: PersonalInfoService
  ) { super(repository) }

  async createLanguageSkill(dto: CreateLanguageSkillDto) {
    const personalInfo = await this.personalInfoService.findOneById(dto.personalInfoId)
    if (!personalInfo) throw new NotFoundException('Personal info not found')
    const created = this.repository.create({ ...dto, personalInfo })
    return await this.repository.save(created)
  }
}
