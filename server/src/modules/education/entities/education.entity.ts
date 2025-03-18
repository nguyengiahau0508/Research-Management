import { BaseEntity } from "src/common/shared/entities/base.entity";
import { PersonalInfo } from "src/modules/personal-info/entities/personal-info.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Education extends BaseEntity {
  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.id, { onDelete: 'CASCADE' })
  personalInfo: PersonalInfo;

  @Column({ type: 'varchar', length: 50, nullable: false })
  degree: string;

  @Column({ type: 'year', nullable: true })
  startYear?: number;

  @Column({ type: 'year', nullable: true })
  endYear?: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  institution?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  major?: string;

  @Column({ type: 'text', nullable: true })
  thesisTitle?: string;
}
