import { BaseEntity } from "src/common/shared/entities/base.entity";
import { PersonalInfo } from "src/modules/personal-info/entities/personal-info.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class LanguageSkill extends BaseEntity {
  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.id, { onDelete: 'CASCADE' })
  personalInfo: PersonalInfo;

  @Column({ type: 'varchar', length: 50, nullable: false })
  languageName: string;

  @Column({ type: 'enum', enum: ['Poor', 'Average', 'Good', 'Excellent'], nullable: false })
  listeningSkill: 'Poor' | 'Average' | 'Good' | 'Excellent';

  @Column({ type: 'enum', enum: ['Poor', 'Average', 'Good', 'Excellent'], nullable: false })
  speakingSkill: 'Poor' | 'Average' | 'Good' | 'Excellent';

  @Column({ type: 'enum', enum: ['Poor', 'Average', 'Good', 'Excellent'], nullable: false })
  writingSkill: 'Poor' | 'Average' | 'Good' | 'Excellent';

  @Column({ type: 'enum', enum: ['Poor', 'Average', 'Good', 'Excellent'], nullable: false })
  readingSkill: 'Poor' | 'Average' | 'Good' | 'Excellent';
}
