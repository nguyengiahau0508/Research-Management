import { Injectable } from "@nestjs/common";
import { BaseService } from "src/common/shared/base.service";
import { FileRepository } from "./file.repository";
import { File } from "./entities/file.entity";

@Injectable()
export class FilesServcie extends BaseService<File> {
  constructor(
    private readonly fileRepository: FileRepository
  ) { super(fileRepository) }
}
