import { Injectable } from "@nestjs/common";
import { BaseService } from "src/common/shared/base.service";
import { ResearchField } from "./entities/research-field.entity";
import { ResearchFieldRepository } from "./research-field.repository";

@Injectable()
export class ResearchFieldsService extends BaseService<ResearchField> {
  constructor(
    private readonly researchFieldRepository: ResearchFieldRepository
  ) {
    super(researchFieldRepository)
  }
}
