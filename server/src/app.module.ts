import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeaturesModule } from './modules/features.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { GlobalVariablesMiddleware } from './middleware/global-variables.middleware';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.HOST || 'localhost',
      port: Number(process.env.MARIADB_PORT) || 3306,
      username: process.env.MARIADB_USERNAME || 'root',
      password: process.env.MARIADB_PASSWORD || '12345678',
      database: process.env.MARIADB_NAME || 'research_management_db',
      autoLoadEntities: true,
      synchronize: true
    }),
    MailModule,
    FeaturesModule,
    AuthModule
  ],
  controllers: [AppController]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GlobalVariablesMiddleware).forRoutes('*')
  }
}
