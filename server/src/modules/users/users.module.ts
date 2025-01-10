import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
import { UserRepository } from "./users.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  exports: [UsersService],
  providers: [UsersService, UserRepository],
  controllers: []
})
export class UserModule { }
