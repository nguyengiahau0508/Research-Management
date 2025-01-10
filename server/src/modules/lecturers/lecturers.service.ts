import { Injectable } from "@nestjs/common";
import { BaseService } from "src/common/shared/base.service";
import { Lecturer } from "./entitites/lecturer.repository";
import { LecturerRepository } from "./lecturer.repository";

@Injectable()
export class LecturersServcie extends BaseService<Lecturer> {
  constructor(
    private readonly lectureRepository: LecturerRepository
  ) {
    super(lectureRepository)
  }
}
