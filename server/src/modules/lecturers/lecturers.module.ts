import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Lecturer } from "./entitites/lecturer.repository";
import { LecturerRepository } from "./lecturer.repository";
import { LecturersServcie } from "./lecturers.service";
import { LecturerController } from "./lecturers.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Lecturer])
  ],
  controllers: [LecturerController],
  exports: [LecturersServcie],
  providers: [LecturerRepository, LecturersServcie]
})
export class LecturersModule { }
