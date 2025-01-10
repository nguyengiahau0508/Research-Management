import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "./entities/student.entity";
import { StudentsService } from "./students.service";
import { StudentsController } from "./students.controller";
import { StudentRepository } from "./student.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([Student])
  ],
  providers: [StudentsService, StudentRepository],
  exports: [StudentsService],
  controllers: [StudentsController]
})
export class StudentsModule { }
