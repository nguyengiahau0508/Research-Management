import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResearchTopic } from "./entities/research-topic.entity";
import { ResearchTopicRepository } from "./research-topic.repository";
import { ResearchTopicsService } from "./research-topics.service";
import { ResearchTopicsController } from "./research-topics.controller";
import { StudentsModule } from "../students/students.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([ResearchTopic]),
    StudentsModule
  ],
  exports: [ResearchTopicsService, ResearchTopicRepository],
  controllers: [ResearchTopicsController],
  providers: [ResearchTopicRepository, ResearchTopicsService]
})
export class ResearchTopicsModule { }
