import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  app.setGlobalPrefix('app');
  
  app.enableCors({
    origin: 'https://nest.networkmanager.pl',
    credentials: true,
    optionsSuccessStatus: 200,
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(3002);
}
bootstrap();
