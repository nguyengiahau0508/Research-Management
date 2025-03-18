import { Module } from '@nestjs/common';
import { CertificationService } from './certification.service';
import { CertificationController } from './certification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certification } from './entities/certification.entity';
import { CertificationRepository } from './certification.repository';
import { PersonalInfoModule } from '../personal-info/personal-info.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Certification]),
    PersonalInfoModule
  ],
  controllers: [CertificationController],
  providers: [CertificationService, CertificationRepository],
  exports: [CertificationService]
})
export class CertificationModule { }
