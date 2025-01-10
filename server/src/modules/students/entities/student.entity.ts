import { Gender } from "src/common/enums/gender.enum";
import { Status } from "src/common/enums/status.enum";
import { NoIdBaseEntity } from "src/common/shared/entities/base-no-id.entity";
import { Department } from "src/modules/departments/entities/department.entity";
import { TraningProgram } from "src/modules/traning-programs/entities/traning-programs.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Student extends NoIdBaseEntity {
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
  classId: string;

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
    (user) => user.student,
    {
      onDelete: 'CASCADE',
      cascade: true
    }
  )
  @JoinColumn()
  user: User;

  @ManyToOne(() => Department, (department) => department.students)
  @JoinColumn()
  department: Department;

  @ManyToOne(() => TraningProgram, (traningProgram) => traningProgram.students)
  @JoinColumn()
  traningProgram: TraningProgram;
}
