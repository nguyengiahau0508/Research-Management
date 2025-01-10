import { IsNotEmpty, IsString } from "class-validator";
import { Department } from "src/modules/departments/entities/department.entity";

export class CreateTraningProgramDto {
  @IsString()
  @IsNotEmpty()
  name: string

  department: Department
}
