import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/shared/base.service';
import { AchievementRepository } from './achievement.repository';
import { Achievement } from './entities/achievement.entity';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { PersonalInfoService } from '../personal-info/personal-info.service';

@Injectable()
export class AchievementService extends BaseService<Achievement> {
  constructor(
    private readonly achievementRepository: AchievementRepository,
    private readonly personalInfoService: PersonalInfoService
  ) {
    super(achievementRepository);
  }

  async createAchievement(dto: CreateAchievementDto): Promise<Achievement> {
    const personalInfo = await this.personalInfoService.findOneById(dto.personalInfoId);
    if (!personalInfo) {
      throw new Error('Personal Info not found');
    }

    const createdAchievement = this.achievementRepository.create({ ...dto, personalInfo });
    return this.achievementRepository.save(createdAchievement);
  }
}
