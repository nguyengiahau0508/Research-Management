import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RegistrationPeriod } from "./entities/registrantion-period.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([RegistrationPeriod])
  ]
})
export class RegistrationPeriodsModule { }
