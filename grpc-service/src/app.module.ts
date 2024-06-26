import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PillowModule } from './pillow/pillow.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/pillowdb'),PillowModule],
  //imports: [MongooseModule.forRoot('mongodb://pillowdb3:27017/pillowdb'),PillowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
