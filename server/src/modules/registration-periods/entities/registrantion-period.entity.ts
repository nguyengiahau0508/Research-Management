import { ResearchLevel } from "src/common/enums/research-level.enum";
import { BaseEntity } from "src/common/shared/entities/base.entity";
import { ResearchTopic } from "src/modules/research-topics/entities/research-topic.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class RegistrationPeriod extends BaseEntity {
  @Column()
  name: string;

  @Column({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;

  @OneToMany(() => ResearchTopic, (researchTopic) => researchTopic.registrationPeriod)
  researchTopics: ResearchTopic[]

  @Column({
    type: 'enum',
    enum: ResearchLevel
  })
  researchLevel: ResearchLevel
}
