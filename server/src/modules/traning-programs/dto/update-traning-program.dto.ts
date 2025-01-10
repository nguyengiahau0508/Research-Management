import { PartialType } from "@nestjs/mapped-types";
import { CreateTraningProgramDto } from "./create-traning-program.dto";

export class UpdateTraningProgramDto extends PartialType(CreateTraningProgramDto) { }
