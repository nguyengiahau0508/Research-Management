import { Injectable } from "@nestjs/common";
import { BaseService } from "src/common/shared/base.service";
import { ResearchGroup } from "./entitites/research-group.entity";
import { ResearchGroupRepository } from "./research-group.repository";

@Injectable()
export class ResearchGroupsService extends BaseService<ResearchGroup> {
  constructor(
    private readonly researchGroupRepository: ResearchGroupRepository
  ) {
    super(researchGroupRepository)
  }
}
