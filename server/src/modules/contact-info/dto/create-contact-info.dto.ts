import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateContactInfoDto {
  @ApiProperty({ description: 'ID của thông tin cá nhân', example: 1 })
  @IsInt()
  @IsNotEmpty()
  personalInfoId: number;

  @ApiProperty({
    description: 'Loại thông tin liên hệ',
    enum: ['Work', 'Personal'],
    example: 'Work',
  })
  @IsEnum(['Work', 'Personal'])
  @IsNotEmpty()
  type: 'Work' | 'Personal';

  @ApiPropertyOptional({ description: 'Địa chỉ', example: '123 Đường Láng, Hà Nội' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ description: 'Số điện thoại hoặc fax', example: '0123-456-789' })
  @IsOptional()
  @IsString()
  phoneFax?: string;

  @ApiPropertyOptional({ description: 'Email', example: 'example@domain.com' })
  @IsOptional()
  @IsEmail()
  email?: string;
}
