import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateResearchProjectDto {
  @ApiProperty({ description: 'ID của thông tin cá nhân', example: 1 })
  @IsInt()
  @IsNotEmpty()
  personalInfoId: number;

  @ApiProperty({ description: 'Tên dự án', example: 'Nghiên cứu AI trong y tế' })
  @IsString()
  @IsNotEmpty()
  projectName: string;

  @ApiPropertyOptional({ description: 'Mã dự án', example: 'DA2023-001' })
  @IsOptional()
  @IsString()
  projectCode?: string;

  @ApiPropertyOptional({ description: 'Cấp quản lý', example: 'Quốc gia' })
  @IsOptional()
  @IsString()
  managementLevel?: string;

  @ApiPropertyOptional({ description: 'Ngày bắt đầu', example: '2023-01-01' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ description: 'Ngày kết thúc', example: '2024-12-31' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ description: 'Ngân sách (triệu đồng)', example: 500 })
  @IsOptional()
  @IsNumber()
  budget?: number;

  @ApiProperty({
    description: 'Vai trò trong dự án',
    enum: ['Principal Investigator', 'Participant'],
    example: 'Principal Investigator',
  })
  @IsEnum(['Principal Investigator', 'Participant'])
  @IsNotEmpty()
  role: 'Principal Investigator' | 'Participant';

  @ApiPropertyOptional({ description: 'Ngày nghiệm thu', example: '2025-01-15' })
  @IsOptional()
  @IsDateString()
  acceptanceDate?: string;

  @ApiPropertyOptional({ description: 'Kết quả dự án', example: 'Hoàn thành xuất sắc' })
  @IsOptional()
  @IsString()
  result?: string;
}
