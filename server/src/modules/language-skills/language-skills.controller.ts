import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguageSkillsService } from './language-skills.service';
import { CreateLanguageSkillDto } from './dto/create-language-skill.dto';
import { UpdateLanguageSkillDto } from './dto/update-language-skill.dto';

@Controller('language-skills')
export class LanguageSkillsController {
  constructor(private readonly languageSkillsService: LanguageSkillsService) { }

  @Post()
  async create(@Body() createLanguageSkillDto: CreateLanguageSkillDto) {
    return this.languageSkillsService.createLanguageSkill(createLanguageSkillDto)
  }

  @Get()
  findAll() {
    return this.languageSkillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageSkillsService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanguageSkillDto: UpdateLanguageSkillDto) {
    return this.languageSkillsService.update(+id, updateLanguageSkillDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.languageSkillsService.remove(+id);
  // }
}
