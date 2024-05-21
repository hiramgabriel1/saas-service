import { Test, TestingModule } from '@nestjs/testing';
import { ManagmentController } from './managment.controller';
import { ManagmentService } from './managment.service';

describe('ManagmentController', () => {
  let controller: ManagmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagmentController],
      providers: [ManagmentService],
    }).compile();

    controller = module.get<ManagmentController>(ManagmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
