import { Controller } from "@nestjs/common";
import { ResearchFieldsService } from "../research-fields/research-fields.service";

@Controller()
export class ResearchGroupsController {
  constructor(
    private readonly researchGroupsService: ResearchFieldsService
  ) { }
}
