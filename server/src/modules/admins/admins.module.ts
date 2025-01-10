import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Admin } from "./entities/admin.entity";
import { AdminsService } from "./admins.service";
import { AdminRepository } from "./admin.reposirtory";

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin])
  ],
  providers: [AdminsService, AdminRepository],
  exports: [AdminsService]
})
export class AdminModule { }
