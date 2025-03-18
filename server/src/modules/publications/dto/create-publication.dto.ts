import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePublicationDto {
  @ApiProperty({ description: 'ID của thông tin cá nhân', example: 1 })
  @IsInt()
  @IsNotEmpty()
  personalInfoId: number;

  @ApiProperty({
    description: 'Loại xuất bản phẩm',
    enum: [
      'Book',
      'International Journal Article',
      'Domestic Journal Article',
      'International Conference Proceedings',
      'Domestic Conference Proceedings',
    ],
    example: 'International Journal Article',
  })
  @IsEnum([
    'Book',
    'International Journal Article',
    'Domestic Journal Article',
    'International Conference Proceedings',
    'Domestic Conference Proceedings',
  ])
  @IsNotEmpty()
  type:
    | 'Book'
    | 'International Journal Article'
    | 'Domestic Journal Article'
    | 'International Conference Proceedings'
    | 'Domestic Conference Proceedings';

  @ApiProperty({ description: 'Tiêu đề xuất bản phẩm', example: 'Ứng dụng AI trong Y học' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ description: 'Nhà xuất bản', example: 'Springer' })
  @IsOptional()
  @IsString()
  publisher?: string;

  @ApiPropertyOptional({ description: 'Năm xuất bản', example: 2023 })
  @IsOptional()
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  publicationYear?: number;

  @ApiProperty({
    description: 'Vai trò tác giả',
    enum: ['Author', 'Co-author'],
    example: 'Author',
  })
  @IsEnum(['Author', 'Co-author'])
  @IsNotEmpty()
  authorType: 'Author' | 'Co-author';

  @ApiPropertyOptional({ description: 'Bút danh', example: 'Nguyễn Khoa' })
  @IsOptional()
  @IsString()
  penName?: string;

  @ApiPropertyOptional({ description: 'Mã kết quả dự án (nếu có)', example: 'PJ2023-004' })
  @IsOptional()
  @IsString()
  projectOutputCode?: string;

  @ApiPropertyOptional({ description: 'ISSN hoặc ISBN', example: '1234-5678' })
  @IsOptional()
  @IsString()
  issnIsbn?: string;

  @ApiPropertyOptional({ description: 'Số tạp chí', example: 'Vol. 5, Issue 2' })
  @IsOptional()
  @IsString()
  journalIssue?: string;

  @ApiPropertyOptional({ description: 'Trang', example: '45-60' })
  @IsOptional()
  @IsString()
  pages?: string;

  @ApiPropertyOptional({ description: 'Chỉ số Impact Factor', example: 3.5 })
  @IsOptional()
  @IsNumber()
  impactFactor?: number;

  @ApiPropertyOptional({ description: 'Xếp hạng Scimago', example: 'Q1' })
  @IsOptional()
  @IsString()
  scimagoRanking?: string;

  @ApiPropertyOptional({ description: 'Tên hội nghị', example: 'ICML 2023' })
  @IsOptional()
  @IsString()
  conferenceName?: string;

  @ApiPropertyOptional({ description: 'Ngày hội nghị', example: '2023-07-15' })
  @IsOptional()
  @IsDateString()
  conferenceDate?: string;

  @ApiPropertyOptional({ description: 'Địa điểm hội nghị', example: 'Hà Nội, Việt Nam' })
  @IsOptional()
  @IsString()
  conferenceLocation?: string;
}
