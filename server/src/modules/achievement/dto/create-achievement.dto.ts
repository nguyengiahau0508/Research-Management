
import { IsInt, IsNotEmpty, IsOptional, IsString, Min, Max } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAchievementDto {
  @ApiProperty({ description: 'ID thông tin cá nhân', example: 1 })
  @IsInt()
  @IsNotEmpty()
  personalInfoId: number;

  @ApiPropertyOptional({ description: 'Năm đạt thành tựu', example: 2023, minimum: 1900, maximum: new Date().getFullYear() })
  @IsOptional()
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  achievementYear?: number;

  @ApiPropertyOptional({ description: 'Mô tả thành tựu', example: 'Đạt giải nhất cuộc thi lập trình' })
  @IsOptional()
  @IsString()
  description?: string;
}

