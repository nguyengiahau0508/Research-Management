import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/common/shared/base.service';
import { Award } from './entities/award.entity';
import { AwardsRepository } from './awards.repository';
import { PersonalInfoService } from '../personal-info/personal-info.service';
import { CreateAwardDto } from './dto/create-award.dto';

@Injectable()
export class AwardsService extends BaseService<Award> {
  constructor(
    readonly repository: AwardsRepository,
    private readonly personalInfoService: PersonalInfoService
  ) { super(repository) }

  async createAward(award: CreateAwardDto): Promise<Award> {
    const personalInfo = await this.personalInfoService.findOneById(award.personalInfoId);

    if (!personalInfo) {
      throw new NotFoundException('Personal Info not found');
    }

    const newAward = this.repository.create({
      ...award,
      personalInfo
    });
    return this.repository.save(newAward);
  }
}
