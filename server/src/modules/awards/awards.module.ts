import { Module } from '@nestjs/common';
import { AwardsService } from './awards.service';
import { AwardsController } from './awards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Award } from './entities/award.entity';
import { AwardsRepository } from './awards.repository';
import { PersonalInfoModule } from '../personal-info/personal-info.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Award]),
    PersonalInfoModule
  ],
  controllers: [AwardsController],
  providers: [AwardsService, AwardsRepository],
  exports: [AwardsService]
})
export class AwardsModule { }
