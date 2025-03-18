import { BaseEntity } from "src/common/shared/entities/base.entity";
import { PersonalInfo } from "src/modules/personal-info/entities/personal-info.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Award extends BaseEntity {
  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.id, { onDelete: 'CASCADE' })
  personalInfo: PersonalInfo;

  @Column({
    type: 'enum',
    enum: ['Award', 'Invention Patent', 'Utility Solution'],
    nullable: false
  })
  type: 'Award' | 'Invention Patent' | 'Utility Solution';

  @Column({ type: 'varchar', length: 255, nullable: false })
  awardName: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  issuingAuthority?: string;

  @Column({ type: 'year', nullable: true })
  issueYear?: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  patentNumber?: string;

  @Column({ type: 'enum', enum: ['Author', 'Co-author'], nullable: true })
  authorType?: 'Author' | 'Co-author';

  @Column({ type: 'varchar', length: 50, nullable: true })
  projectOutputCode?: string;
}
