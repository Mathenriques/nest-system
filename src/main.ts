import { NestFactory } from '@nestjs/core';
import { UserModule } from './users/users.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);

  app.useGlobalPipes(new ValidationPipe())
  
  await app.listen(3000);
}
bootstrap();
