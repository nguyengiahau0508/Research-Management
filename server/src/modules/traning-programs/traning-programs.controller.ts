import { Controller, Get, Param } from "@nestjs/common";
import { TraningProgramsService } from "./traning-programs.service";

@Controller('traning-programs')
export class TraningProgramsController {
  constructor(
    private readonly traningProgramsService: TraningProgramsService
  ) { }

  @Get('find-all-by-department/:departmentId')
  async findAllByDepartemnt(@Param('departmentId') id: number) {
    return { data: await this.traningProgramsService.findAll({ where: { department: { id } } }) }
  }
}



