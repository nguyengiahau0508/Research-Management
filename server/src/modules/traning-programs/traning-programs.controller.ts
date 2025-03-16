import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TraningProgramsService } from "./traning-programs.service";
import { CreateTraningProgramDto } from "./dto/create-traning-program.dto";

@Controller('traning-programs')
export class TraningProgramsController {
  constructor(
    private readonly traningProgramsService: TraningProgramsService
  ) { }

  @Post()
  async createAndSave(@Body() dto: CreateTraningProgramDto) {
    console.log(dto)
    const created = this.traningProgramsService.create(dto)
    return {
      data: await this.traningProgramsService.save(created)
    }
  }

  @Get('find-all-by-department/:departmentId')
  async findAllByDepartemnt(@Param('departmentId') id: number) {
    return { data: await this.traningProgramsService.findAll({ where: { department: { id } } }) }
  }
}



