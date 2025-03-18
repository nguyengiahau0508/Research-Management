import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAwardDto {
  @ApiProperty({ description: 'ID của thông tin cá nhân', example: 1 })
  @IsInt()
  @IsNotEmpty()
  personalInfoId: number;

  @ApiProperty({
    description: 'Loại giải thưởng/sáng chế',
    enum: ['Award', 'Invention Patent', 'Utility Solution'],
    example: 'Award',
  })
  @IsEnum(['Award', 'Invention Patent', 'Utility Solution'])
  @IsNotEmpty()
  type: 'Award' | 'Invention Patent' | 'Utility Solution';

  @ApiProperty({ description: 'Tên giải thưởng/sáng chế', example: 'Giải thưởng nghiên cứu xuất sắc' })
  @IsString()
  @IsNotEmpty()
  awardName: string;

  @ApiPropertyOptional({ description: 'Mô tả giải thưởng/sáng chế', example: 'Giải thưởng dành cho nghiên cứu AI' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Cơ quan cấp giải thưởng/sáng chế', example: 'Bộ Khoa học và Công nghệ' })
  @IsOptional()
  @IsString()
  issuingAuthority?: string;

  @ApiPropertyOptional({ description: 'Năm cấp giải thưởng/sáng chế', example: 2023 })
  @IsOptional()
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  issueYear?: number;

  @ApiPropertyOptional({ description: 'Số bằng sáng chế (nếu có)', example: 'VN12345' })
  @IsOptional()
  @IsString()
  patentNumber?: string;

  @ApiPropertyOptional({ description: 'Vai trò tác giả', enum: ['Author', 'Co-author'], example: 'Author' })
  @IsOptional()
  @IsEnum(['Author', 'Co-author'])
  authorType?: 'Author' | 'Co-author';

  @ApiPropertyOptional({ description: 'Mã kết quả dự án (nếu có)', example: 'PJ2023-001' })
  @IsOptional()
  @IsString()
  projectOutputCode?: string;
}
