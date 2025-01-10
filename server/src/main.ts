import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const port = Number(process.env.PORT) || 3000
  const host = process.env.HOST || 'localhost'

  const db_port = Number(process.env.MARIADB_PORT) || 3306
  const db_host = process.env.MARIADB_HOST || 'localhost'
  const db_name = process.env.MARIADB_NAME || 'research_management_db'

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new ResponseInterceptor());

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(port, host, () => {
    console.log('App: ', {
      port: port,
      host: host
    })

    console.log('DB: ', {
      port: db_port,
      host: db_host,
      name: db_name
    })
  });
}
bootstrap();
