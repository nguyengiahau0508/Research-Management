import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { File } from "./entities/file.entity";
import { FilesServcie } from "./files.service";
import { FileRepository } from "./file.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([File])
  ],
  exports: [FilesServcie],
  providers: [FilesServcie, FileRepository]
})
export class FilesModule { }
