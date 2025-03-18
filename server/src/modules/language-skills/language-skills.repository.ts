import { Injectable } from "@nestjs/common";
import { BaseAbstractRepository } from "src/common/shared/repositories/base.abstract.repository";
import { LanguageSkill } from "./entities/language-skill.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class LanguageSkillsRepository extends BaseAbstractRepository<LanguageSkill> {
  constructor(
    @InjectRepository(LanguageSkill) private readonly languageSkillRepository: Repository<LanguageSkill>
  ) { super(languageSkillRepository) }
}
