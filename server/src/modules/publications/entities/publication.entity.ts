import { BaseEntity } from "src/common/shared/entities/base.entity";
import { PersonalInfo } from "src/modules/personal-info/entities/personal-info.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Publication extends BaseEntity {
  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.id, { onDelete: 'CASCADE' })
  personalInfo: PersonalInfo;

  @Column({
    type: 'enum',
    enum: [
      'Book',
      'International Journal Article',
      'Domestic Journal Article',
      'International Conference Proceedings',
      'Domestic Conference Proceedings'
    ],
    nullable: false
  })
  type: 'Book' | 'International Journal Article' | 'Domestic Journal Article' | 'International Conference Proceedings' | 'Domestic Conference Proceedings';

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  publisher?: string;

  @Column({ type: 'year', nullable: true })
  publicationYear?: number;

  @Column({ type: 'enum', enum: ['Author', 'Co-author'], nullable: false })
  authorType: 'Author' | 'Co-author';

  @Column({ type: 'varchar', length: 100, nullable: true })
  penName?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  projectOutputCode?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  issnIsbn?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  journalIssue?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  pages?: string;

  @Column({ type: 'float', nullable: true })
  impactFactor?: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  scimagoRanking?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  conferenceName?: string;

  @Column({ type: 'date', nullable: true })
  conferenceDate?: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  conferenceLocation?: string;
}
