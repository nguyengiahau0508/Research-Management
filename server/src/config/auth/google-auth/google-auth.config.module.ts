import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'
import googleAuthConfig from './google-auth.config';
import { GoogleAuthConfigService } from './google-auth.config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [googleAuthConfig],
      validationSchema: Joi.object({
        GOOGLE_CLIENT_ID: Joi.string().required(),
        GOOGLE_CLIENT_SECRET: Joi.string().required(),
        GOOGLE_REDIRECT_URI: Joi.string().required()
      })
    })
  ],
  providers: [GoogleAuthConfigService],
  exports: [GoogleAuthConfigService]
})
export class GoogleAuthConfigModule { }
