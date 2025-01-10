
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from 'src/common/shared/repositories/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Lecturer } from './entitites/lecturer.repository';

@Injectable()
export class LecturerRepository extends BaseAbstractRepository<Lecturer> {
  constructor(@InjectRepository(Lecturer) repository: Repository<Lecturer>) {
    super(repository);
  }
}
