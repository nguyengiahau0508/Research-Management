import { PartialType } from '@nestjs/mapped-types';
import { CreateParacticalApplicationDto } from './create-paractical-application.dto';

export class UpdateParacticalApplicationDto extends PartialType(CreateParacticalApplicationDto) {}
