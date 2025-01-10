

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from 'src/common/shared/repositories/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ResearchField } from './entities/research-field.entity';

@Injectable()
export class ResearchFieldRepository extends BaseAbstractRepository<ResearchField> {
  constructor(@InjectRepository(ResearchField) repository: Repository<ResearchField>) {
    super(repository);
  }
}
