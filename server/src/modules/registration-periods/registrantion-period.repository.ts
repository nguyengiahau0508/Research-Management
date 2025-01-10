
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from 'src/common/shared/repositories/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistrationPeriod } from './entities/registrantion-period.entity';

@Injectable()
export class RegistrationPeriodRepository extends BaseAbstractRepository<RegistrationPeriod> {
  constructor(@InjectRepository(File) repository: Repository<RegistrationPeriod>) {
    super(repository);
  }
}
