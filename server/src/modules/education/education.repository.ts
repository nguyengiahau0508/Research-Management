import { Injectable } from "@nestjs/common";
import { BaseAbstractRepository } from "src/common/shared/repositories/base.abstract.repository";
import { Education } from "./entities/education.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class EducationRepository extends BaseAbstractRepository<Education> {
  constructor(
    @InjectRepository(Education) private readonly educationRepository: Repository<Education>
  ) { super(educationRepository) }
}
