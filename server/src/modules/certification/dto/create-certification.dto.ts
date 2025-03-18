import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCertificationDto {
  @ApiProperty({ description: 'ID của thông tin cá nhân', example: 1 })
  @IsInt()
  @IsNotEmpty()
  personalInfoId: number;

  @ApiPropertyOptional({ description: 'Tên chứng chỉ', example: 'Chứng chỉ Lập trình viên' })
  @IsOptional()
  @IsString()
  certificateName?: string;

  @ApiPropertyOptional({ description: 'Ngày bắt đầu', example: '2023-01-01' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ description: 'Ngày kết thúc', example: '2023-06-30' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ description: 'Tổ chức cấp chứng chỉ', example: 'Học viện CNTT' })
  @IsOptional()
  @IsString()
  institution?: string;

  @ApiPropertyOptional({ description: 'Tên khóa học', example: 'Lập trình NestJS' })
  @IsOptional()
  @IsString()
  courseName?: string;
}
