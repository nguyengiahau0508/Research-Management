
import { IsDate, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ExternalActivityType } from '../entities/external-activity.entity';

export class CreateExternalActivityDto {
  @ApiProperty({ description: 'ID thông tin cá nhân', example: 1 })
  @IsInt()
  @IsNotEmpty()
  personalInfoId: number;

  @ApiProperty({ description: 'Loại hoạt động bên ngoài', enum: ExternalActivityType, example: ExternalActivityType.COUNCIL })
  @IsEnum(ExternalActivityType)
  @IsNotEmpty()
  type: ExternalActivityType;

  @ApiPropertyOptional({ description: 'Ngày bắt đầu hoạt động', example: '2024-03-01T00:00:00.000Z', type: String, format: 'date-time' })
  @IsOptional()
  @IsDate()
  startDate?: Date;

  @ApiPropertyOptional({ description: 'Ngày kết thúc hoạt động', example: '2024-06-01T00:00:00.000Z', type: String, format: 'date-time' })
  @IsOptional()
  @IsDate()
  endDate?: Date;

  @ApiPropertyOptional({ description: 'Tên hoạt động', example: 'Tình nguyện mùa hè xanh' })
  @IsOptional()
  @IsString()
  activityName?: string;

  @ApiPropertyOptional({ description: 'Chức vụ trong hoạt động', example: 'Trưởng nhóm' })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiPropertyOptional({ description: 'Nội dung chi tiết của hoạt động', example: 'Hỗ trợ giảng dạy cho trẻ em vùng cao' })
  @IsOptional()
  @IsString()
  content?: string;
}

