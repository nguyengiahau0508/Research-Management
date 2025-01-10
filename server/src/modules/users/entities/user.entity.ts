import { Role } from "src/common/enums/role.enum";
import { BaseEntity } from "src/common/shared/entities/base.entity";
import { Lecturer } from "src/modules/lecturers/entitites/lecturer.repository";
import { ResearchMember } from "src/modules/research-members/entities/research-member.entity";
import { ResearchTopic } from "src/modules/research-topics/entities/research-topic.entity";
import { Student } from "src/modules/students/entities/student.entity";
import { Column, Entity, OneToMany, OneToOne } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @Column({
    type: 'enum',
    enum: Role,
  })
  role: Role;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  relatedId?: string;

  @OneToOne(
    () => Student,
    (student) => student.user,
    {
      nullable: true,
    })
  student?: Student;

  @OneToOne(
    () => Lecturer,
    (lecturer) => lecturer.user,
    {
      nullable: true,
    })
  lecturer?: Lecturer;

  @OneToMany(() => ResearchTopic, (researchTopic) => researchTopic.user)
  researchTopics?: ResearchTopic[]

  @OneToMany(() => ResearchMember, (researchMember) => researchMember.user)
  researchMember?: ResearchMember[]
}
