import { Global, Module } from "@nestjs/common";
import { DepartmentsModule } from "src/modules/departments/departments.module";
import { StudentsModule } from "src/modules/students/students.module";
import { TraningProgramModule } from "src/modules/traning-programs/traning-programs.module";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { GoogleAuthConfigModule } from "src/config/auth/google-auth/google-auth.config.module";
import { GoogleStrategy } from "./strategy/google-strategy/google.strategy";
import { JwtModule } from "@nestjs/jwt";
import { JwtAuthConfigModule } from "src/config/auth/jwt-auth/jwt-auth.config.module";
import { JwtAuthConfigService } from "src/config/auth/jwt-auth/jwt-auth.config.service";
import { AdminModule } from "src/modules/admins/admins.module";
import { LecturersModule } from "src/modules/lecturers/lecturers.module";

@Global()
@Module({
  imports: [
    AdminModule,
    StudentsModule,
    LecturersModule,
    TraningProgramModule,
    DepartmentsModule,
    GoogleAuthConfigModule,
    JwtAuthConfigModule,
    JwtModule.registerAsync({
      imports: [JwtAuthConfigModule],
      inject: [JwtAuthConfigService],
      useFactory: async (jwtAuthConfigService: JwtAuthConfigService) => {
        return {
          secret: jwtAuthConfigService.secret,
          signOptions: { expiresIn: jwtAuthConfigService.accessExpiresIn }
        }
      },
    })
  ],
  providers: [
    AuthService,
    GoogleStrategy,
  ],
  exports: [
    JwtAuthConfigModule,
    JwtModule
  ],
  controllers: [AuthController]
})
export class AuthModule { }
