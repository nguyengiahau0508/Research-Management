
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from 'src/common/shared/repositories/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from './entities/file.entity';

@Injectable()
export class FileRepository extends BaseAbstractRepository<File> {
  constructor(@InjectRepository(File) repository: Repository<File>) {
    super(repository);
  }
}
