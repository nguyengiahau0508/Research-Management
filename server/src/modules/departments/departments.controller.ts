import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { DepartmentsService } from "./departments.service";
import { CreateDepartmentDto } from "./dto/create-department.dto";
import { UpdateDepartmentDto } from "./dto/update.department.dto";


@Controller('departments')
export class DepartmentsController {
  constructor(
    private readonly departmentsService: DepartmentsService
  ) { }

  @Post()
  async create(@Body() dto: CreateDepartmentDto) {
    return {
      data: await this.departmentsService.createAndSave(dto)
    }
  }

  @Get()
  async getAll() {
    return { data: await this.departmentsService.findAll() }
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return {
      data: await this.departmentsService.findOneById(id)
    }
  }

  @Patch()
  async update(@Body() dto: UpdateDepartmentDto) {
    const data = await this.departmentsService.preload(dto)
    return {
      data: await this.departmentsService.save(data)
    }
  }
}

