import { Injectable } from "@nestjs/common";
import { BaseAbstractRepository } from "src/common/shared/repositories/base.abstract.repository";
import { Certification } from "./entities/certification.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class CertificationRepository extends BaseAbstractRepository<Certification> {
  constructor(
    @InjectRepository(Certification) private readonly certificationRepository: Repository<Certification>
  ) { super(certificationRepository) }
}
