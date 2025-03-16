import { Controller, Get } from "@nestjs/common";
import { LecturersServcie } from "./lecturers.service";

@Controller('lecturers')
export class LecturerController{
  constructor(
    private lecturersService: LecturersServcie
  ) { }

  @Get()
  async getAll() {
    return {
      data: await this.lecturersService.findAll()
    }
  }
}
