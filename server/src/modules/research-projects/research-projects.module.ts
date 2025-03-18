import { Module } from '@nestjs/common';
import { ResearchProjectsService } from './research-projects.service';
import { ResearchProjectsController } from './research-projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResearchProject } from './entities/research-project.entity';
import { ResearchProjectsRepository } from './research-projects.repository';
import { PersonalInfoModule } from '../personal-info/personal-info.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([ResearchProject]),
    PersonalInfoModule
  ],
  controllers: [ResearchProjectsController],
  providers: [ResearchProjectsService, ResearchProjectsRepository],
  exports: [ResearchProjectsService]
})
export class ResearchProjectsModule { }
