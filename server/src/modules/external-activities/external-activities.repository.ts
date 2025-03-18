import { Injectable } from "@nestjs/common";
import { BaseAbstractRepository } from "src/common/shared/repositories/base.abstract.repository";
import { ExternalActivity } from "./entities/external-activity.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
@Injectable()
export class ExternalActivitiesRepository extends BaseAbstractRepository<ExternalActivity> {
  constructor(
    @InjectRepository(ExternalActivity) private readonly externalActivityRepository: Repository<ExternalActivity>
  ) {
    super(externalActivityRepository);
  }
}
