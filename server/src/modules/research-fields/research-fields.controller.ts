import { Controller, Get } from "@nestjs/common";
import { ResearchFieldsService } from "./research-fields.service";

@Controller('research-fields')
export class ResearchFieldsController {
  constructor(
    private readonly researchFieldsService: ResearchFieldsService
  ) { }

  @Get()
  async getAll() {
    return {
      data: await this.researchFieldsService.findAll()
    }
  }
}
