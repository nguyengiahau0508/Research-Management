import { Injectable } from "@nestjs/common";
import { BaseAbstractRepository } from "src/common/shared/repositories/base.abstract.repository";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ParacticalApplication } from "./entities/paractical-application.entity";
@Injectable()
export class ParticalApplicationsRepository extends BaseAbstractRepository<ParacticalApplication> {
  constructor(
    @InjectRepository(ParacticalApplication)
    private readonly paracticalApplicationRepository: Repository<ParacticalApplication>
  ) { super(paracticalApplicationRepository) }

}
