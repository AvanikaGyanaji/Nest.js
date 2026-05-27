import { Test, TestingModule } from '@nestjs/testing';
import { ExxceptionController } from './exxception.controller';

describe('ExxceptionController', () => {
  let controller: ExxceptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExxceptionController],
    }).compile();

    controller = module.get<ExxceptionController>(ExxceptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
