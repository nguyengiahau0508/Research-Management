import { Injectable } from "@nestjs/common";
import { Admin } from "./entities/admin.entity";
import { AdminRepository } from "./admin.reposirtory";
import { BaseService } from "src/common/shared/base.service";

@Injectable()
export class AdminsService extends BaseService<Admin> {
  constructor(
    private readonly adminRepository: AdminRepository
  ) {
    super(adminRepository)
  }
}
