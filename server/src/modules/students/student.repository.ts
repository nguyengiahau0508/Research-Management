
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from 'src/common/shared/repositories/base.abstract.repository';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentRepository extends BaseAbstractRepository<Student> {
  constructor(@InjectRepository(Student) repository: Repository<Student>) {
    super(repository);
  }
}
