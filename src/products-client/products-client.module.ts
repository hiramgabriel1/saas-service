import { Module } from '@nestjs/common';
import { ProductsClientService } from './products-client.service';
import { ProductsClientController } from './products-client.controller';

@Module({
  controllers: [ProductsClientController],
  providers: [ProductsClientService],
})
export class ProductsClientModule {}
