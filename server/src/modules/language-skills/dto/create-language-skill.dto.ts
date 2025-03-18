import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguageSkillDto {
  @ApiProperty({ description: 'ID của thông tin cá nhân', example: 1 })
  @IsInt()
  @IsNotEmpty()
  personalInfoId: number;

  @ApiProperty({ description: 'Tên ngôn ngữ', example: 'Tiếng Anh' })
  @IsString()
  @IsNotEmpty()
  languageName: string;

  @ApiProperty({
    description: 'Kỹ năng nghe',
    enum: ['Poor', 'Average', 'Good', 'Excellent'],
    example: 'Good',
  })
  @IsEnum(['Poor', 'Average', 'Good', 'Excellent'])
  @IsNotEmpty()
  listeningSkill: 'Poor' | 'Average' | 'Good' | 'Excellent';

  @ApiProperty({
    description: 'Kỹ năng nói',
    enum: ['Poor', 'Average', 'Good', 'Excellent'],
    example: 'Average',
  })
  @IsEnum(['Poor', 'Average', 'Good', 'Excellent'])
  @IsNotEmpty()
  speakingSkill: 'Poor' | 'Average' | 'Good' | 'Excellent';

  @ApiProperty({
    description: 'Kỹ năng viết',
    enum: ['Poor', 'Average', 'Good', 'Excellent'],
    example: 'Excellent',
  })
  @IsEnum(['Poor', 'Average', 'Good', 'Excellent'])
  @IsNotEmpty()
  writingSkill: 'Poor' | 'Average' | 'Good' | 'Excellent';

  @ApiProperty({
    description: 'Kỹ năng đọc',
    enum: ['Poor', 'Average', 'Good', 'Excellent'],
    example: 'Good',
  })
  @IsEnum(['Poor', 'Average', 'Good', 'Excellent'])
  @IsNotEmpty()
  readingSkill: 'Poor' | 'Average' | 'Good' | 'Excellent';
}
