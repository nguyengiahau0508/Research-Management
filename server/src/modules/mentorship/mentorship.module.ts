import { Module } from '@nestjs/common';
import { MentorshipService } from './mentorship.service';
import { MentorshipController } from './mentorship.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mentorship } from './entities/mentorship.entity';
import { MentorshipRepository } from './mentorship.repository';
import { PersonalInfoModule } from '../personal-info/personal-info.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Mentorship]),
    PersonalInfoModule
  ],
  controllers: [MentorshipController],
  providers: [MentorshipService, MentorshipRepository],
  exports: [MentorshipService]
})
export class MentorshipModule { }
