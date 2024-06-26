import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,{
    transport: Transport.GRPC,
    options: {
      package: 'pillow',
      protoPath: join(__dirname, './protos/pillow.proto'),
      //url:'0.0.0.0:5001'
      url:'localhost:5001'
    },
  });
  await app.listen();
}
bootstrap();


