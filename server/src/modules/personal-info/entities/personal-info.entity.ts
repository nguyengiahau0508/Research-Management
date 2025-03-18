import { BaseEntity } from "src/common/shared/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class PersonalInfo extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  fullName: string;

  @Column({ type: 'enum', enum: ['Male', 'Female'], nullable: false })
  gender: 'Male' | 'Female';

  @Column({ type: 'date', nullable: false })
  dateOfBirth: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  placeOfBirth?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  hometown?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  department?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  faculty?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  highestDegree?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  academicTitle?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  researchTitle?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  position?: string;

  @Column({ type: 'date', nullable: true })
  workStartDate?: Date;
}
