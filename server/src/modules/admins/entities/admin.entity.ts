import { BaseEntity } from "src/common/shared/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Admin extends BaseEntity{
  @Column({ unique: true })
  email: string
}
