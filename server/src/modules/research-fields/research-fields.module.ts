import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResearchFieldRepository } from "./research-field.repository";
import { ResearchFieldsService } from "./research-fields.service";
import { ResearchFieldsController } from "./research-fields.controller";
import { ResearchField } from "./entities/research-field.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ResearchField])
  ],
  providers: [ResearchFieldRepository, ResearchFieldsService],
  exports: [ResearchFieldsService],
  controllers: [ResearchFieldsController]
})
export class ResearchFieldsModule { }
