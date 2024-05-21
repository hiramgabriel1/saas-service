import { Controller } from '@nestjs/common';
import { ProductsClientService } from './products-client.service';

@Controller('products-client')
export class ProductsClientController {
  constructor(private readonly productsClientService: ProductsClientService) {}
}
