
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsEnum,
  IsPhoneNumber,
  IsNumber
} from "class-validator";
import { Gender } from "src/common/enums/gender.enum";

export class RegisterStudentAuthDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  fMName: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsNotEmpty()
  @IsString()
  classId: string;

  @IsNotEmpty()
  @IsPhoneNumber('VN')
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  // @IsNotEmpty()
  // @ValidateNested()
  // @Type(() => User)
  // user: User;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  departmentId: number

  @IsNotEmpty()
  @IsNumber()
  traningProgramId: number
}

