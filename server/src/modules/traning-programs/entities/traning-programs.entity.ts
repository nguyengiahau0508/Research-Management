import { BaseEntity } from "src/common/shared/entities/base.entity";
import { Department } from "src/modules/departments/entities/department.entity";
import { Student } from "src/modules/students/entities/student.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";


@Entity()
export class TraningProgram extends BaseEntity {
  @Column()
  name: string

  @ManyToOne(() => Department, (department) => department.traningPrograms, { onDelete: 'CASCADE' })
  @JoinColumn()
  department: Department

  @OneToMany(
    () => Student,
    (student) => student.traningProgram
  )
  students: Student[]
}
