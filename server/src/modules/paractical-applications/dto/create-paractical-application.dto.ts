import { IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateParacticalApplicationDto {
  @ApiProperty({ description: 'ID của thông tin cá nhân', example: 1 })
  @IsInt()
  @IsNotEmpty()
  personalInfoId: number;

  @ApiProperty({ description: 'Tên công nghệ', example: 'AI phân tích hình ảnh' })
  @IsString()
  @IsNotEmpty()
  technologyName: string;

  @ApiPropertyOptional({
    description: 'Chi tiết ứng dụng',
    example: 'Ứng dụng trong nhận diện khuôn mặt',
  })
  @IsOptional()
  @IsString()
  applicationDetails?: string;

  @ApiPropertyOptional({ description: 'Năm chuyển giao', example: 2023 })
  @IsOptional()
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  transferYear?: number;

  @ApiPropertyOptional({ description: 'Mã kết quả dự án (nếu có)', example: 'PJ2023-003' })
  @IsOptional()
  @IsString()
  projectOutputCode?: string;
}
