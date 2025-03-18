import { Injectable } from "@nestjs/common";
import { BaseAbstractRepository } from "src/common/shared/repositories/base.abstract.repository";
import { Achievement } from "./entities/achievement.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class AchievementRepository extends BaseAbstractRepository<Achievement> {
  constructor(
    @InjectRepository(Achievement)
    private readonly achievementRepository: Repository<Achievement>
  ) { super(achievementRepository) }
}
