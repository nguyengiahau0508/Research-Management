import { Injectable } from "@nestjs/common";
import { BaseAbstractRepository } from "src/common/shared/repositories/base.abstract.repository";
import { Award } from "./entities/award.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AwardsRepository extends BaseAbstractRepository<Award> {
  constructor(
    @InjectRepository(Award)
    private readonly awardRepository: Repository<Award>
  ) {
    super(awardRepository)
  }
}
