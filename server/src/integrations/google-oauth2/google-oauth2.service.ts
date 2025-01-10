import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import * as serviceAccount from './config/coderank-444000-9de364a8c52e.json'

@Injectable()
export class GoogleOauth2Service {
  private oAuth2Client = new google.auth.JWT(
    serviceAccount.client_email,
    undefined,
    serviceAccount.private_key,
    ['https://www.googleapis.com/auth/drive.file'],
  );

  getAuthenticatedClient() {
    return this.oAuth2Client;
  }
}
