import { Injectable } from "@nestjs/common";
import { BaseAbstractRepository } from "src/common/shared/repositories/base.abstract.repository";
import { Mentorship } from "./entities/mentorship.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository} from "typeorm";

@Injectable()
export class MentorshipRepository extends BaseAbstractRepository<Mentorship> {
  constructor(
    @InjectRepository(Mentorship) private readonly mentorshipRepository: Repository<Mentorship>
  ) { super(mentorshipRepository) }
}
