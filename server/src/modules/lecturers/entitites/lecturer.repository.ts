import { Gender } from "src/common/enums/gender.enum";
import { Status } from "src/common/enums/status.enum";
import { NoIdBaseEntity } from "src/common/shared/entities/base-no-id.entity";
import { Department } from "src/modules/departments/entities/department.entity";
import { ResearchTopic } from "src/modules/research-topics/entities/research-topic.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Lecturer extends NoIdBaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  fMName: string;

  @Column()
  lastname: string;

  @Column({
    type: 'enum',
    enum: Gender
  })
  gender: Gender;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  address: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.PENDING
  })
  status: Status;

  @OneToOne(
    () => User,
    (user) => user.lecturer,
    {
      onDelete: 'CASCADE',
      cascade: true
    }
  )
  @JoinColumn()
  user: User;

  @ManyToOne(() => Department, (department) => department.lecturers)
  @JoinColumn()
  department: Department;

  @OneToMany(() => ResearchTopic, (researchTopic) => researchTopic.lecturer)
  researchTopics: ResearchTopic[]
}
