import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ExternalActivitiesService } from './external-activities.service';
import { CreateExternalActivityDto } from './dto/create-external-activity.dto';
import { UpdateExternalActivityDto } from './dto/update-external-activity.dto';

@Controller('external-activities')
export class ExternalActivitiesController {
  constructor(private readonly externalActivitiesService: ExternalActivitiesService) { }

  @Post()
  async create(@Body() createExternalActivityDto: CreateExternalActivityDto) {
    return {
      data: await this.externalActivitiesService.createExternalActivity(createExternalActivityDto),
    }
  }

  @Get()
  findAll() {
    return this.externalActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.externalActivitiesService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExternalActivityDto: UpdateExternalActivityDto) {
    return this.externalActivitiesService.update(+id, updateExternalActivityDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.externalActivitiesService.remove(+id);
  // }
}
