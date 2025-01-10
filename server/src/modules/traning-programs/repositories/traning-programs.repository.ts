import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from 'src/common/shared/repositories/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TraningProgram } from '../entities/traning-programs.entity';

@Injectable()
export class TraningProgramRepository extends BaseAbstractRepository<TraningProgram> {
  constructor(@InjectRepository(TraningProgram) repository: Repository<TraningProgram>) {
    super(repository);
  }
}
