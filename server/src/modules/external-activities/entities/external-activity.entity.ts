import { BaseEntity } from "src/common/shared/entities/base.entity";
import { PersonalInfo } from "src/modules/personal-info/entities/personal-info.entity";
import { Column, Entity, ManyToOne } from "typeorm";

export enum ExternalActivityType {
  COUNCIL = 'Council',
  ASSOCIATION = 'Association',
  WORKING_ELSEWHERE = 'Working elsewhere',
}

@Entity()
export class ExternalActivity extends BaseEntity {
  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.id, { onDelete: 'CASCADE' })
  personalInfo: PersonalInfo;

  @Column({ type: 'enum', enum: ExternalActivityType, nullable: false })
  type: ExternalActivityType;

  @Column({ type: 'date', nullable: true })
  startDate?: Date;

  @Column({ type: 'date', nullable: true })
  endDate?: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  activityName?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  position?: string;

  @Column({ type: 'text', nullable: true })
  content?: string;
}
