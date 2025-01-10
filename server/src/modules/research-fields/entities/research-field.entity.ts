import { BaseEntity } from "src/common/shared/entities/base.entity";
import { ResearchTopic } from "src/modules/research-topics/entities/research-topic.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class ResearchField extends BaseEntity {
  @Column()
  name: string

  @OneToMany(() => ResearchTopic, (researchTopic) => researchTopic.researchField)
  researchTopics: ResearchTopic[]
} 
