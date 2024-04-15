import { Module } from '@nestjs/common';
import { PillowService } from './pillow.service';
import { PillowController } from './pillow.controller';

@Module({
  providers: [PillowService],
  controllers: [PillowController]
})
export class PillowModule {}
