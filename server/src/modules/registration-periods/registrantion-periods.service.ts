import { Injectable } from "@nestjs/common";
import { BaseService } from "src/common/shared/base.service";
import { RegistrationPeriodRepository } from "./registrantion-period.repository";
import { RegistrationPeriod } from "./entities/registrantion-period.entity";

@Injectable()
export class RegistrationPeriodsService extends BaseService<RegistrationPeriod> {
  constructor(
    private readonly registrationPeriodsRepository: RegistrationPeriodRepository
  ) {
    super(registrationPeriodsRepository)
  }
}
