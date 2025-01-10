import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { UserRepository } from "./users.repository";
import { BaseService } from "src/common/shared/base.service";

@Injectable()
export class UsersService extends BaseService<User> {
  constructor(
    private readonly userRepository: UserRepository
  ) {
    super(userRepository)
  }
}
