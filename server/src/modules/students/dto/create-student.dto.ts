
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsEnum,
  IsPhoneNumber,
  ValidateNested
} from "class-validator";
import { Type } from "class-transformer";
import { Gender } from "src/common/enums/gender.enum";
import { User } from "src/modules/users/entities/user.entity";
import { Department } from "src/modules/departments/entities/department.entity";
import { TraningProgram } from "src/modules/traning-programs/entities/traning-programs.entity";

export class CreateStudentDto {
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
  @ValidateNested()
  @Type(() => Department)
  department: Department

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => TraningProgram)
  traningProgram: TraningProgram

}

