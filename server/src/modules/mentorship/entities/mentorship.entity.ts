import { BaseEntity } from "src/common/shared/entities/base.entity";
import { PersonalInfo } from "src/modules/personal-info/entities/personal-info.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Mentorship extends BaseEntity {
  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.id, { onDelete: 'CASCADE' })
  personalInfo: PersonalInfo;

  @Column({ type: 'varchar', length: 100, nullable: true })
  studentName?: string;

  @Column({ type: 'text', nullable: true })
  thesisTitle?: string;

  @Column({ type: 'year', nullable: true })
  graduationYear?: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  degree?: string;

  @Column({ type: 'enum', enum: ['Primary', 'Secondary'], nullable: false })
  role: 'Primary' | 'Secondary';

  @Column({ type: 'varchar', length: 50, nullable: true })
  projectOutputCode?: string;
}
