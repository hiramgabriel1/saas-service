import { Controller } from '@nestjs/common';
import { CajasService } from './cajas.service';

@Controller('cajas')
export class CajasController {
  constructor(private readonly cajasService: CajasService) {}
}
