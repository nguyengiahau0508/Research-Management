import { Module } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';
import { ContactInfoController } from './contact-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactInfo } from './entities/contact-info.entity';
import { ContactInfoRepository } from './contact-info.repository';
import { PersonalInfoModule } from '../personal-info/personal-info.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContactInfo]),
    PersonalInfoModule
  ],
  controllers: [ContactInfoController],
  providers: [ContactInfoService, ContactInfoRepository],
  exports: [ContactInfoService]
})
export class ContactInfoModule { }
