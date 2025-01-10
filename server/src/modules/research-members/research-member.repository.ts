
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from 'src/common/shared/repositories/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ResearchMember } from './entities/research-member.entity';

@Injectable()
export class ResearchMemberRepository extends BaseAbstractRepository<ResearchMember> {
  constructor(@InjectRepository(ResearchMember) repository: Repository<ResearchMember>) {
    super(repository);
  }
}
