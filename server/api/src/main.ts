import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { config } from './utils/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.getTyped('app').port);
}
bootstrap();
