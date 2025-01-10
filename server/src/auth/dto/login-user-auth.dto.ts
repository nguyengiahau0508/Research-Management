import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginUserAuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string
}
