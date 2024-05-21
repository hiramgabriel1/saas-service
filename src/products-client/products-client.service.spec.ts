import { Test, TestingModule } from '@nestjs/testing';
import { ProductsClientService } from './products-client.service';

describe('ProductsClientService', () => {
  let service: ProductsClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsClientService],
    }).compile();

    service = module.get<ProductsClientService>(ProductsClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
