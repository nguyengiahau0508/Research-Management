
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from 'src/common/shared/repositories/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminRepository extends BaseAbstractRepository<Admin> {
  constructor(@InjectRepository(Admin) repository: Repository<Admin>) {
    super(repository);
  }
}
