import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResearchGroup } from "./entitites/research-group.entity";
import { ResearchGroupsService } from "./research-groups.service";
import { ResearchGroupRepository } from "./research-group.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([ResearchGroup])
  ],
  exports: [ResearchGroupsService],
  providers: [ResearchGroupsService, ResearchGroupRepository]
})
export class ResearchGroupsModule { }
