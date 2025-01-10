import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResearchTopic } from "./entities/research-topic.entity";
import { ResearchTopicRepository } from "./research-topic.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([ResearchTopic])
  ],
  exports: [],
  providers: [ResearchTopicRepository]
})
export class ResearchTopicsModule { }
