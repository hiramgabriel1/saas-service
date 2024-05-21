import { Test, TestingModule } from '@nestjs/testing';
import { ProductsClientController } from './products-client.controller';
import { ProductsClientService } from './products-client.service';

describe('ProductsClientController', () => {
  let controller: ProductsClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsClientController],
      providers: [ProductsClientService],
    }).compile();

    controller = module.get<ProductsClientController>(ProductsClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
