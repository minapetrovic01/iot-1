import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,{
    transport: Transport.GRPC,
    options: {
      package: 'pillow',
      protoPath: 'C:\\Users\\minap\ELFAK\\iot\\grpc-service\\protos\\pillow.proto',
    },
  });
  //app.enableCors();
  //await app.listen(3000);
  await app.listen();
}
bootstrap();


