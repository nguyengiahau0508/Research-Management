import { BaseEntity } from "src/common/shared/entities/base.entity";
import { PersonalInfo } from "src/modules/personal-info/entities/personal-info.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class ResearchProject extends BaseEntity {
  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.id, { onDelete: 'CASCADE' })
  personalInfo: PersonalInfo;

  @Column({ type: 'varchar', length: 255, nullable: false })
  projectName: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  projectCode?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  managementLevel?: string;

  @Column({ type: 'date', nullable: true })
  startDate?: Date;

  @Column({ type: 'date', nullable: true })
  endDate?: Date;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  budget?: number;

  @Column({ type: 'enum', enum: ['Principal Investigator', 'Participant'], nullable: false })
  role: 'Principal Investigator' | 'Participant';

  @Column({ type: 'date', nullable: true })
  acceptanceDate?: Date;

  @Column({ type: 'varchar', length: 50, nullable: true })
  result?: string;
}
