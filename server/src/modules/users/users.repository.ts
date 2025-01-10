import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from 'src/common/shared/repositories/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository extends BaseAbstractRepository<User> {
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository);
  }
}
