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
    ResearchMembesModule
  ]
})
export class FeaturesModule { }
