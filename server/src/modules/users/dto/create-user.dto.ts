import { IsEnum } from "class-validator";
import { Role } from "src/common/enums/role.enum";

export class CreateUserDto {
  @IsEnum(Role, { message: 'Role must be one of ADMIN, STUDENT, or TEACHER' })
  role: Role;
}
