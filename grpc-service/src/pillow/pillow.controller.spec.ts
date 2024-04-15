import { Test, TestingModule } from '@nestjs/testing';
import { PillowController } from './pillow.controller';

describe('PillowController', () => {
  let controller: PillowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PillowController],
    }).compile();

    controller = module.get<PillowController>(PillowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
