import { PartialType } from '@nestjs/swagger';
import { CreateExternalActivityDto } from './create-external-activity.dto';

export class UpdateExternalActivityDto extends PartialType(CreateExternalActivityDto) {}
