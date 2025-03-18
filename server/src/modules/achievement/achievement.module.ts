import { Module } from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { AchievementController } from './achievement.controller';
import { Achievement } from './entities/achievement.entity';
import { AchievementRepository } from './achievement.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalInfoModule } from '../personal-info/personal-info.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Achievement]),
    PersonalInfoModule
  ],
  controllers: [AchievementController],
  providers: [AchievementService, AchievementRepository],
  exports: [AchievementService]
})
export class AchievementModule { }
