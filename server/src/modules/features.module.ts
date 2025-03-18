import { Module } from "@nestjs/common";
import { UserModule } from "./users/users.module";
import { DepartmentsModule } from "./departments/departments.module";
import { TraningProgramModule } from "./traning-programs/traning-programs.module";
import { StudentsModule } from "./students/students.module";
import { AdminModule } from "./admins/admins.module";
import { ResearchFieldsModule } from "./research-fields/research-fields.module";
import { ResearchGroupsModule } from "./research-groups/research-groups.module";
import { FilesModule } from "./files/files.module";
import { RegistrationPeriodsModule } from "./registration-periods/registration-periods.module";
import { LecturersModule } from "./lecturers/lecturers.module";
import { ResearchTopicsModule } from "./research-topics/research-topics.module";
import { ResearchMembesModule } from "./research-members/research-members.module";
import { PersonalInfoModule } from './personal-info/personal-info.module';
import { ContactInfoModule } from './contact-info/contact-info.module';
import { LanguageSkillsModule } from './language-skills/language-skills.module';
import { EducationModule } from './education/education.module';
import { CertificationModule } from './certification/certification.module';
import { ResearchProjectsModule } from './research-projects/research-projects.module';
import { MentorshipModule } from './mentorship/mentorship.module';
import { PublicationsModule } from './publications/publications.module';
import { AwardsModule } from './awards/awards.module';
import { ParacticalApplicationsModule } from './paractical-applications/paractical-applications.module';
import { AchievementModule } from './achievement/achievement.module';
import { ExternalActivitiesModule } from './external-activities/external-activities.module';

@Module({
  imports: [
    UserModule,
    AdminModule,
    DepartmentsModule,
    TraningProgramModule,
    StudentsModule,
    ResearchFieldsModule,
    ResearchGroupsModule,
    FilesModule,
    RegistrationPeriodsModule,
    LecturersModule,
    ResearchTopicsModule,
    ResearchMembesModule,
    PersonalInfoModule,
    ContactInfoModule,
    LanguageSkillsModule,
    EducationModule,
    CertificationModule,
    ResearchProjectsModule,
    MentorshipModule,
    PublicationsModule,
    AwardsModule,
    ParacticalApplicationsModule,
    AchievementModule,
    ExternalActivitiesModule
  ]
})
export class FeaturesModule { }
