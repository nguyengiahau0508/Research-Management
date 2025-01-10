import { Injectable, Module } from "@nestjs/common";
import { BaseService } from "src/common/shared/base.service";
import { ResearchTopic } from "./entities/research-topic.entity";
import { ResearchTopicRepository } from "./research-topic.repository";

@Injectable()
export class ResearchTopicsService extends BaseService<ResearchTopic> {
  constructor(
    private readonly researchTopicRepository: ResearchTopicRepository
  ) {
    super(researchTopicRepository)
  }

  
}
