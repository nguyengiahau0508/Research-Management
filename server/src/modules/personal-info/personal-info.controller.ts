import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalInfoService } from './personal-info.service';
import { CreatePersonalInfoDto } from './dto/create-personal-info.dto';
import { UpdatePersonalInfoDto } from './dto/update-personal-info.dto';

@Controller('personal-info')
export class PersonalInfoController {
  constructor(private readonly personalInfoService: PersonalInfoService) { }

  @Post()
  async create(@Body() createPersonalInfoDto: CreatePersonalInfoDto) {
    const created = this.personalInfoService.create(createPersonalInfoDto);
    return await this.personalInfoService.save(created);
  }

  @Get()
  findAll() {
    return this.personalInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalInfoService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonalInfoDto: UpdatePersonalInfoDto) {
    return this.personalInfoService.update(+id, updatePersonalInfoDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.personalInfoService.remove(+id);
  // }
}
