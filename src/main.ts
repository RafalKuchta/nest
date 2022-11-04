import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('app');
  
  app.enableCors({
    origin: 'https://nest.networkmanager.pl',
    credentials: true,
    optionsSuccessStatus: 200,
  });

  await app.listen(3001);
}
bootstrap();
