import { Module } from "@nestjs/common";
import { GoogleAuthOauth2Module } from "../google-oauth2/google-oauth2.module";

@Module({
  imports: [GoogleAuthOauth2Module],
  exports: [],
  providers: []
})
export class GoogleDriveModule { }
