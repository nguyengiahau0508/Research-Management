import { IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateEducationDto {
  @ApiProperty({ description: 'ID của thông tin cá nhân', example: 1 })
  @IsInt()
  @IsNotEmpty()
  personalInfoId: number;

  @ApiProperty({ description: 'Bằng cấp', example: 'Cử nhân' })
  @IsString()
  @IsNotEmpty()
  degree: string;

  @ApiPropertyOptional({ description: 'Năm bắt đầu', example: 2015 })
  @IsOptional()
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  startYear?: number;

  @ApiPropertyOptional({ description: 'Năm kết thúc', example: 2019 })
  @IsOptional()
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  endYear?: number;

  @ApiPropertyOptional({ description: 'Tên cơ sở đào tạo', example: 'Đại học Bách Khoa Hà Nội' })
  @IsOptional()
  @IsString()
  institution?: string;

  @ApiPropertyOptional({ description: 'Chuyên ngành', example: 'Công nghệ thông tin' })
  @IsOptional()
  @IsString()
  major?: string;

  @ApiPropertyOptional({ description: 'Tên luận văn', example: 'Ứng dụng AI trong y tế' })
  @IsOptional()
  @IsString()
  thesisTitle?: string;
}
