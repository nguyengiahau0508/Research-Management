import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'
import jwtAuthConfig from './jwt-auth.config';
import { JwtAuthConfigService } from './jwt-auth.config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [jwtAuthConfig],
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        JWT_ACCESS_TOKEN_EXPIRES_IN: Joi.string().required(),
        JWT_REFRESH_TOKEN_EXPIRES_IN: Joi.string().required()
      })
    })
  ],
  providers: [JwtAuthConfigService],
  exports: [JwtAuthConfigService]
})

export class JwtAuthConfigModule { }
