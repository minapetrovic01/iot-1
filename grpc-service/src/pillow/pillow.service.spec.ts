import { Test, TestingModule } from '@nestjs/testing';
import { PillowService } from './pillow.service';

describe('PillowService', () => {
  let service: PillowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PillowService],
    }).compile();

    service = module.get<PillowService>(PillowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
