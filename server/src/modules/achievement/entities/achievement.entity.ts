import { BaseEntity } from "src/common/shared/entities/base.entity";
import { PersonalInfo } from "src/modules/personal-info/entities/personal-info.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Achievement extends BaseEntity {
  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.id, { onDelete: 'CASCADE' })
  personalInfo: PersonalInfo;

  @Column({ type: 'year', nullable: true })
  achievementYear?: number;

  @Column({ type: 'text', nullable: true })
  description?: string;
}
