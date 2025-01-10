import { Controller } from "@nestjs/common";
import { ResearchFieldsService } from "./research-fields.service";

@Controller()
export class ResearchFieldsController {
  constructor(
    private readonly researchFieldsService: ResearchFieldsService
  ) { }
}
