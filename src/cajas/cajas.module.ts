import { Module } from '@nestjs/common';
import { CajasService } from './cajas.service';
import { CajasController } from './cajas.controller';

@Module({
  controllers: [CajasController],
  providers: [CajasService],
})
export class CajasModule {}
