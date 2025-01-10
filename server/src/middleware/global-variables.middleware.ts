
import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GlobalVariablesMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) { }

  use(req: any, res: any, next: () => void) {
    res.locals.apiUrl = process.env.API_URL || 'http://localhost:8080';
    next();
  }
}
