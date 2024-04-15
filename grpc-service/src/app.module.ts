import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PillowModule } from './pillow/pillow.module';

@Module({
  imports: [PillowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
