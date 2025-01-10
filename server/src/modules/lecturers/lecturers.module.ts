import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Lecturer } from "./entitites/lecturer.repository";
import { LecturerRepository } from "./lecturer.repository";
import { LecturersServcie } from "./lecturers.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Lecturer])
  ],
  exports: [LecturersServcie],
  providers: [LecturerRepository, LecturersServcie]
})
export class LecturersModule { }
