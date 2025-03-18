import { BaseEntity } from "src/common/shared/entities/base.entity";
import { PersonalInfo } from "src/modules/personal-info/entities/personal-info.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class ParacticalApplication extends BaseEntity {
  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.id, { onDelete: 'CASCADE' })
  personalInfo: PersonalInfo;

  @Column({ type: 'varchar', length: 255, nullable: false })
  technologyName: string;

  @Column({ type: 'text', nullable: true })
  applicationDetails?: string;

  @Column({ type: 'year', nullable: true })
  transferYear?: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  projectOutputCode?: string;
}
