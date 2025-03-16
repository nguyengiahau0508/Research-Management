import { Injectable } from "@nestjs/common";
import { BaseService } from "src/common/shared/base.service";
import { DepartmentRepository } from "./department.repository";
import { Department } from "./entities/department.entity";
import { CreateDepartmentDto } from "./dto/create-department.dto";

@Injectable()
export class DepartmentsService extends BaseService<Department> {
  constructor(
    private readonly departmentRepository: DepartmentRepository
  ) { super(departmentRepository) }

  async createAndSave(dto: CreateDepartmentDto) {
    const created = this.departmentRepository.create(dto)
    return await this.departmentRepository.save(created)
  }
}
