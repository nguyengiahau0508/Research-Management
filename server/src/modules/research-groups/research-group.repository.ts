


import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from 'src/common/shared/repositories/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ResearchGroup } from './entitites/research-group.entity';

@Injectable()
export class ResearchGroupRepository extends BaseAbstractRepository<ResearchGroup> {
  constructor(@InjectRepository(ResearchGroup) repository: Repository<ResearchGroup>) {
    super(repository);
  }
}
