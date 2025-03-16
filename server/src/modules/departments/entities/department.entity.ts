import { BaseEntity } from "src/common/shared/entities/base.entity";
import { Lecturer } from "src/modules/lecturers/entitites/lecturer.repository";
import { ResearchTopic } from "src/modules/research-topics/entities/research-topic.entity";
import { Student } from "src/modules/students/entities/student.entity";
import { TraningProgram } from "src/modules/traning-programs/entities/traning-programs.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Department extends BaseEntity {
  @Column()
  name: string

  @OneToMany(() => TraningProgram, (traningProgram) => traningProgram.department)
  traningPrograms: TraningProgram[];

  @OneToMany(
    () => Student,
    (student) => student.department
  )
  students: Student[]

  @OneToMany(
    () => Lecturer,
    (lecturer) => lecturer.department
  )
  lecturers: Lecturer[]

  @OneToMany(
    () => ResearchTopic,
    (researchTopic) => researchTopic.department
  )
  researchTopics: ResearchTopic[]
}
