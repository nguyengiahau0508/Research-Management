import { Controller, Get } from "@nestjs/common";
import { DepartmentsService } from "./departments.service";


@Controller('departments')
export class DepartmentsController {
  constructor(
    private readonly departmentsService: DepartmentsService
  ) { }

  @Get()
  async getAll() {
    return { data: await this.departmentsService.findAll() }
  }
}

