import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResearchProjectsService } from './research-projects.service';
import { CreateResearchProjectDto } from './dto/create-research-project.dto';
import { UpdateResearchProjectDto } from './dto/update-research-project.dto';

@Controller('research-projects')
export class ResearchProjectsController {
  constructor(private readonly researchProjectsService: ResearchProjectsService) { }

  @Post()
  async create(@Body() createResearchProjectDto: CreateResearchProjectDto) {
    return {
      data: await this.researchProjectsService.createResearchProject(createResearchProjectDto)
    }
  }

  @Get()
  findAll() {
    return this.researchProjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.researchProjectsService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResearchProjectDto: UpdateResearchProjectDto) {
    return this.researchProjectsService.update(+id, updateResearchProjectDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.researchProjectsService.remove(+id);
  // }
}
