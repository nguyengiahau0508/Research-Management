
import { DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm';
import { BaseInterfaceRepository } from './repositories/base.interface.repository';

export abstract class BaseService<T> {
  constructor(protected readonly repository: BaseInterfaceRepository<T>) { }

  create(data: DeepPartial<T>): T {
    return this.repository.create(data);
  }

  createMany(data: DeepPartial<T>[]): T[] {
    return this.repository.createMany(data);
  }

  save(data: DeepPartial<T>): Promise<T> {
    return this.repository.save(data);
  }

  saveMany(data: DeepPartial<T>[]): Promise<T[]> {
    return this.repository.saveMany(data);
  }

  findOneById(id: any): Promise<T> {
    return this.repository.findOneById(id);
  }

  findByCondition(filterCondition: FindOneOptions<T>): Promise<T> {
    return this.repository.findByCondition(filterCondition);
  }

  findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.findAll(options);
  }

  findWithRelations(relations: FindManyOptions<T>): Promise<T[]> {
    return this.repository.findWithRelations(relations);
  }

  remove(data: T): Promise<T> {
    return this.repository.remove(data);
  }

  preload(entityLike: DeepPartial<T>): Promise<T> {
    return this.repository.preload(entityLike);
  }

  update(id: any, data: DeepPartial<T>): Promise<T> {
    return this.repository.update(id, data);
  }
}

