import { Injectable } from "@nestjs/common";
import { BaseAbstractRepository } from "src/common/shared/repositories/base.abstract.repository";
import { Publication } from "./entities/publication.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PublicationsRepository extends BaseAbstractRepository<Publication> {
  constructor(
    @InjectRepository(Publication)
    private readonly publicationRepository: Repository<Publication>
  ) {
    super(publicationRepository)
  }
}
