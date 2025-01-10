import { Injectable } from "@nestjs/common";
import { BaseService } from "src/common/shared/base.service";
import { DepartmentRepository } from "./department.repository";
import { Department } from "./entities/department.entity";

@Injectable()
export class DepartmentsService extends BaseService<Department> {
  constructor(
    private readonly departmentRepository: DepartmentRepository
  ) { super(departmentRepository) }
}
