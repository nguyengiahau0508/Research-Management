import { ResearchLevel } from "src/common/enums/research-level.enum";
import { Status } from "src/common/enums/status.enum";
import { BaseEntity } from "src/common/shared/entities/base.entity";
import { Department } from "src/modules/departments/entities/department.entity";
import { File } from "src/modules/files/entities/file.entity";
import { Lecturer } from "src/modules/lecturers/entitites/lecturer.repository";
import { RegistrationPeriod } from "src/modules/registration-periods/entities/registrantion-period.entity";
import { ResearchField } from "src/modules/research-fields/entities/research-field.entity";
import { ResearchGroup } from "src/modules/research-groups/entitites/research-group.entity";
import { ResearchMember } from "src/modules/research-members/entities/research-member.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";

@Entity()
export class ResearchTopic extends BaseEntity {
  @ManyToOne(() => User, (user) => user.researchTopics)
  @JoinColumn()
  user: User

  @Column()
  name: string

  @ManyToOne(() => Department, (department) => department.researchTopics)
  @JoinColumn()
  department: Department

  @ManyToOne(() => ResearchField, (researchField) => researchField.researchTopics)
  @JoinColumn()
  researchField: ResearchField

  @ManyToOne(() => Lecturer, (lecturer) => lecturer.researchTopics, { nullable: true })
  @JoinColumn()
  lecturer?: Lecturer

  @ManyToOne(() => ResearchGroup, (researchGroup) => researchGroup.researchTopics, { nullable: true })
  @JoinColumn()
  researchGroup?: ResearchGroup

  @OneToOne(
    () => File, (file) => file.outlineResearchTopic,
    { nullable: true }
  )
  @JoinColumn()
  outlineFile?: File

  @Column({ type: 'text' })
  necessity: string

  @Column({ type: 'text' })
  mainContent: string

  @Column({ type: 'text' })
  productsResults: string

  @Column()
  funding: number

  @Column()
  durationMonths: number

  @Column({ type: 'text' })
  researchCapacity: string

  @Column({ default: false })
  isDocumentPrepared: boolean

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.PENDING
  })
  status: Status

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  registrationTime: Date;

  @Column({ type: 'timestamp', nullable: true })
  confirmationTime: Date

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  finalReportDate: Date;

  @OneToOne(
    () => File, (file) => file.acceptanceResearchTopic,
    { nullable: true }
  )
  @JoinColumn()
  acceptanceDocument?: File;

  @Column({
    type: 'enum',
    enum: ResearchLevel
  })
  researchLevel: ResearchLevel

  @ManyToOne(() => RegistrationPeriod, (registrationPeriod) => registrationPeriod.researchTopics)
  @JoinColumn()
  registrationPeriod: RegistrationPeriod

  @OneToMany(() => ResearchMember, (researchMember) => researchMember.researchTopic)
  researchMembers: ResearchMember[]
}
