import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Education } from './entities/education.entity';
import { EducationRepository } from './education.repository';
import { PersonalInfoModule } from '../personal-info/personal-info.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Education]),
    PersonalInfoModule
  ],
  controllers: [EducationController],
  providers: [EducationService, EducationRepository],
  exports: [EducationService]
})
export class EducationModule { }
