import { BaseEntity } from 'src/common/shared/entities/base.entity';
import { PersonalInfo } from 'src/modules/personal-info/entities/personal-info.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class ContactInfo extends BaseEntity {
  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.id, { onDelete: 'CASCADE' })
  personalInfo: PersonalInfo;

  @Column({ type: 'enum', enum: ['Work', 'Personal'], nullable: false })
  type: 'Work' | 'Personal';

  @Column({ type: 'varchar', length: 255, nullable: true })
  address?: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phoneFax?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email?: string;
}
