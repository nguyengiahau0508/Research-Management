
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from 'src/common/shared/repositories/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentRepository extends BaseAbstractRepository<Department> {
  constructor(@InjectRepository(Department) repository: Repository<Department>) {
    super(repository);
  }
}
