import { Module } from '@nestjs/common';
import { PillowService } from './pillow.service';
import { PillowController } from './pillow.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pillow, PillowSchema } from './pillow.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Pillow.name, schema: PillowSchema }])],
  providers: [PillowService],
  controllers: [PillowController]
})
export class PillowModule {}
