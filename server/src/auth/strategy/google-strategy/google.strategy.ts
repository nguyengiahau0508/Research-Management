import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { GoogleAuthConfigService } from 'src/config/auth/google-auth/google-auth.config.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly googleAuthConfig: GoogleAuthConfigService) {
    super({
      clientID: googleAuthConfig.clientId,
      clientSecret: googleAuthConfig.clientSecret,
      callbackURL: `http://localhost:8080/auth/google/callback`,
      scope: ['email', 'profile'],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      familyName: name.familyName,
      givenName: name.givenName
    };

    done(null, user);
  }
}
