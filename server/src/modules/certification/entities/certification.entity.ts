import { BaseEntity } from "src/common/shared/entities/base.entity";
import { PersonalInfo } from "src/modules/personal-info/entities/personal-info.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Certification extends BaseEntity {
  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.id, { onDelete: 'CASCADE' })
  personalInfo: PersonalInfo;

  @Column({ type: 'varchar', length: 100, nullable: true })
  certificateName?: string;

  @Column({ type: 'date', nullable: true })
  startDate?: Date;

  @Column({ type: 'date', nullable: true })
  endDate?: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  institution?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  courseName?: string;
}
