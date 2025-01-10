import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResearchMember } from "./entities/research-member.entity";
import { ResearchMembersService } from "./research-members.service";
import { ResearchMemberRepository } from "./research-member.repository";

@Module({
  imports: [TypeOrmModule.forFeature([ResearchMember])],
  exports: [ResearchMembersService],
  providers: [ResearchMemberRepository, ResearchMembersService]
})
export class ResearchMembesModule { }
