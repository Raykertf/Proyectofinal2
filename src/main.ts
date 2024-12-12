import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilita CORS aquí
  app.enableCors(); // Esto permite las solicitudes de diferentes orígenes
  
  await app.listen(3000); // Asegúrate de que esté escuchando en el puerto correcto
}

bootstrap();
