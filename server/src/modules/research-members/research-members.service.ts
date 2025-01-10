import { Injectable } from "@nestjs/common";
import { BaseService } from "src/common/shared/base.service";
import { ResearchMemberRepository } from "./research-member.repository";
import { ResearchMember } from "./entities/research-member.entity";

@Injectable()
export class ResearchMembersService extends BaseService<ResearchMember> {
  constructor(private readonly researchMemberRepository: ResearchMemberRepository) {
    super(researchMemberRepository)
  }
}
