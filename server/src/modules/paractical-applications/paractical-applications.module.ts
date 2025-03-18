import { Module } from '@nestjs/common';
import { ParacticalApplicationsService } from './paractical-applications.service';
import { ParacticalApplicationsController } from './paractical-applications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParacticalApplication } from './entities/paractical-application.entity';
import { ParticalApplicationsRepository } from './paractical-applicaitions.repository';
import { PersonalInfoModule } from '../personal-info/personal-info.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([ParacticalApplication]),
    PersonalInfoModule
  ],
  controllers: [ParacticalApplicationsController],
  providers: [ParacticalApplicationsService, ParticalApplicationsRepository],
  exports: [ParacticalApplicationsService]
})
export class ParacticalApplicationsModule { }
