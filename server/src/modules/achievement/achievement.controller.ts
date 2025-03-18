import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';

@Controller('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) { }

  @Post()
  async create(@Body() createAchievementDto: CreateAchievementDto) {
    return {
      data: await this.achievementService.createAchievement(createAchievementDto)
    }
  }

  @Get()
  findAll() {
    return this.achievementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.achievementService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAchievementDto: UpdateAchievementDto) {
    return this.achievementService.update(+id, updateAchievementDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.achievementService.remove(+id);
  // }
}
