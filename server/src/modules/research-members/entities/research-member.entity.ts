import { BaseEntity } from "src/common/shared/entities/base.entity";
import { ResearchTopic } from "src/modules/research-topics/entities/research-topic.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class ResearchMember extends BaseEntity {
  @ManyToOne(() => User, (user) => user.researchMember)
  @JoinColumn()
  user: User

  @ManyToOne(() => ResearchTopic, (researchTopic) => researchTopic.researchMembers)
  @JoinColumn()
  researchTopic: ResearchTopic
}
