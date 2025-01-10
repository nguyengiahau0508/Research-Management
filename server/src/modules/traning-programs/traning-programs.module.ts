import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TraningProgram } from "./entities/traning-programs.entity";
import { TraningProgramsService } from "./traning-programs.service";
import { TraningProgramsController } from "./traning-programs.controller";
import { TraningProgramRepository } from "./repositories/traning-programs.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([TraningProgram])
  ],
  exports: [TraningProgramsService],
  providers: [TraningProgramsService, TraningProgramRepository],
  controllers: [TraningProgramsController]
})
export class TraningProgramModule { }
