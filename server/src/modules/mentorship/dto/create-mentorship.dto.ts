import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMentorshipDto {
  @ApiProperty({ description: 'ID của thông tin cá nhân', example: 1 })
  @IsInt()
  @IsNotEmpty()
  personalInfoId: number;

  @ApiPropertyOptional({ description: 'Tên học viên/sinh viên', example: 'Nguyễn Văn B' })
  @IsOptional()
  @IsString()
  studentName?: string;

  @ApiPropertyOptional({ description: 'Tên luận văn', example: 'Ứng dụng AI trong giáo dục' })
  @IsOptional()
  @IsString()
  thesisTitle?: string;

  @ApiPropertyOptional({ description: 'Năm tốt nghiệp', example: 2023 })
  @IsOptional()
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  graduationYear?: number;

  @ApiPropertyOptional({ description: 'Bằng cấp', example: 'Thạc sĩ' })
  @IsOptional()
  @IsString()
  degree?: string;

  @ApiProperty({
    description: 'Vai trò hướng dẫn',
    enum: ['Primary', 'Secondary'],
    example: 'Primary',
  })
  @IsEnum(['Primary', 'Secondary'])
  @IsNotEmpty()
  role: 'Primary' | 'Secondary';

  @ApiPropertyOptional({ description: 'Mã kết quả dự án (nếu có)', example: 'PJ2023-002' })
  @IsOptional()
  @IsString()
  projectOutputCode?: string;
}
