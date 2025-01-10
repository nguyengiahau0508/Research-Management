

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from 'src/common/shared/repositories/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ResearchTopic } from './entities/research-topic.entity';

@Injectable()
export class ResearchTopicRepository extends BaseAbstractRepository<ResearchTopic> {
  constructor(@InjectRepository(ResearchTopic) repository: Repository<ResearchTopic>) {
    super(repository);
  }
}
