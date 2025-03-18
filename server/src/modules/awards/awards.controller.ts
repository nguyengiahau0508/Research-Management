import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AwardsService } from './awards.service';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';

@Controller('awards')
export class AwardsController {
  constructor(private readonly awardsService: AwardsService) { }

  @Post()
  async create(@Body() createAwardDto: CreateAwardDto) {
    return this.awardsService.createAward(createAwardDto);
  }

  @Get()
  findAll() {
    return this.awardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.awardsService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAwardDto: UpdateAwardDto) {
    return this.awardsService.update(+id, updateAwardDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.awardsService.remove(+id);
  // }
}
