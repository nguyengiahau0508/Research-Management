import { Module } from '@nestjs/common';
import { ExternalActivitiesService } from './external-activities.service';
import { ExternalActivitiesController } from './external-activities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalActivity } from './entities/external-activity.entity';
import { ExternalActivitiesRepository } from './external-activities.repository';
import { PersonalInfoModule } from '../personal-info/personal-info.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([ExternalActivity]),
    PersonalInfoModule
  ],
  controllers: [ExternalActivitiesController],
  providers: [ExternalActivitiesService, ExternalActivitiesRepository],
  exports: [ExternalActivitiesService]
})
export class ExternalActivitiesModule { }
