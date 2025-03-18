import { Injectable } from "@nestjs/common";
import { BaseAbstractRepository } from "src/common/shared/repositories/base.abstract.repository";
import { ContactInfo } from "./entities/contact-info.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ContactInfoRepository extends BaseAbstractRepository<ContactInfo> {
  constructor(
    @InjectRepository(ContactInfo) private readonly contactInfoRepository: Repository<ContactInfo>
  ) { super(contactInfoRepository) }
}
