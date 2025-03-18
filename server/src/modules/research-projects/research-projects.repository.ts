import { Injectable } from "@nestjs/common";
import { BaseAbstractRepository } from "src/common/shared/repositories/base.abstract.repository";
import { ResearchProject } from "./entities/research-project.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
@Injectable()
export class ResearchProjectsRepository extends BaseAbstractRepository<ResearchProject> {
  constructor(
    @InjectRepository(ResearchProject)
    private readonly researchProjectRepository: Repository<ResearchProject>
  ) {
    super(researchProjectRepository);
  }
}
