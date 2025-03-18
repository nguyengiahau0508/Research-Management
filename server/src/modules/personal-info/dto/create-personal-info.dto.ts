import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePersonalInfoDto {
  @ApiProperty({ description: 'Họ và tên đầy đủ', example: 'Nguyễn Văn A' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ description: 'Giới tính', enum: ['Male', 'Female'], example: 'Male' })
  @IsEnum(['Male', 'Female'])
  @IsNotEmpty()
  gender: 'Male' | 'Female';

  @ApiProperty({ description: 'Ngày sinh', example: '1990-01-01' })
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  dateOfBirth: Date;

  @ApiPropertyOptional({ description: 'Nơi sinh', example: 'Hà Nội' })
  @IsOptional()
  @IsString()
  placeOfBirth?: string;

  @ApiPropertyOptional({ description: 'Quê quán', example: 'Nghệ An' })
  @IsOptional()
  @IsString()
  hometown?: string;

  @ApiPropertyOptional({ description: 'Bộ phận', example: 'Công nghệ thông tin' })
  @IsOptional()
  @IsString()
  department?: string;

  @ApiPropertyOptional({ description: 'Khoa', example: 'Khoa học máy tính' })
  @IsOptional()
  @IsString()
  faculty?: string;

  @ApiPropertyOptional({ description: 'Bằng cấp cao nhất', example: 'Thạc sĩ' })
  @IsOptional()
  @IsString()
  highestDegree?: string;

  @ApiPropertyOptional({ description: 'Danh hiệu học thuật', example: 'Giáo sư' })
  @IsOptional()
  @IsString()
  academicTitle?: string;

  @ApiPropertyOptional({ description: 'Danh hiệu nghiên cứu', example: 'Nhà nghiên cứu' })
  @IsOptional()
  @IsString()
  researchTitle?: string;

  @ApiPropertyOptional({ description: 'Chức vụ', example: 'Trưởng phòng' })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiPropertyOptional({ description: 'Ngày bắt đầu làm việc', example: '2020-01-01' })
  @Type(() => Date)
  @IsOptional()
  @IsDate()
  workStartDate?: Date;
}
