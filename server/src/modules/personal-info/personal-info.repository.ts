import { Injectable } from "@nestjs/common";
import { BaseAbstractRepository } from "src/common/shared/repositories/base.abstract.repository";
import { PersonalInfo } from "./entities/personal-info.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class PersonalInfoRepository extends BaseAbstractRepository<PersonalInfo> {
  constructor(
    @InjectRepository(PersonalInfo) private readonly personalInfoRepository: Repository<PersonalInfo>
  ) {
    super(personalInfoRepository);
  }
}

