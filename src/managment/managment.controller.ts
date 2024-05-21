import { Controller } from '@nestjs/common';
import { ManagmentService } from './managment.service';

@Controller('managment')
export class ManagmentController {
  constructor(private readonly managmentService: ManagmentService) {}
}
