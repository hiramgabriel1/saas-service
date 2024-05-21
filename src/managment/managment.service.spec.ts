import { Test, TestingModule } from '@nestjs/testing';
import { ManagmentService } from './managment.service';

describe('ManagmentService', () => {
  let service: ManagmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagmentService],
    }).compile();

    service = module.get<ManagmentService>(ManagmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
