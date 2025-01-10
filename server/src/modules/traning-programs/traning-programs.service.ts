import { Injectable } from "@nestjs/common";
import { TraningProgram } from "./entities/traning-programs.entity";
import { BaseService } from "src/common/shared/base.service";
import { TraningProgramRepository } from "./repositories/traning-programs.repository";

@Injectable()
export class TraningProgramsService extends BaseService<TraningProgram> {
  constructor(
    private readonly traningProgramRepository: TraningProgramRepository
  ) { super(traningProgramRepository) }
} 
