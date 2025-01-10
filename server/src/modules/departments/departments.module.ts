import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Department } from "./entities/department.entity";
import { DepartmentsService } from "./departments.service";
import { DepartmentsController } from "./departments.controller";
import { DepartmentRepository } from "./department.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([Department])
  ],
  providers: [DepartmentsService, DepartmentRepository],
  exports: [DepartmentsService],
  controllers: [DepartmentsController]
})
export class DepartmentsModule { }
