import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/shared/base.service';
import { PersonalInfo } from './entities/personal-info.entity';
import { PersonalInfoRepository } from './personal-info.repository';

@Injectable()
export class PersonalInfoService extends BaseService<PersonalInfo> {
  constructor(
    readonly personalInfoRepository: PersonalInfoRepository
  ) { super(personalInfoRepository) }
}
