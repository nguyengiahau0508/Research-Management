import { Module } from '@nestjs/common';
import { LanguageSkillsService } from './language-skills.service';
import { LanguageSkillsController } from './language-skills.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageSkill } from './entities/language-skill.entity';
import { LanguageSkillsRepository } from './language-skills.repository';
import { PersonalInfoModule } from '../personal-info/personal-info.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([LanguageSkill]),
    PersonalInfoModule
  ],
  controllers: [LanguageSkillsController],
  providers: [LanguageSkillsService, LanguageSkillsRepository],
  exports: [LanguageSkillsService]
})
export class LanguageSkillsModule { }
