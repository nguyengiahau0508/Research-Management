import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MentorshipService } from './mentorship.service';
import { CreateMentorshipDto } from './dto/create-mentorship.dto';
import { UpdateMentorshipDto } from './dto/update-mentorship.dto';

@Controller('mentorship')
export class MentorshipController {
  constructor(private readonly mentorshipService: MentorshipService) { }

  @Post()
  async create(@Body() createMentorshipDto: CreateMentorshipDto) {
    return this.mentorshipService.createMentorship(createMentorshipDto)
  }

  @Get()
  findAll() {
    return this.mentorshipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mentorshipService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMentorshipDto: UpdateMentorshipDto) {
    return this.mentorshipService.update(+id, updateMentorshipDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.mentorshipService.remove(+id);
  // }
}
