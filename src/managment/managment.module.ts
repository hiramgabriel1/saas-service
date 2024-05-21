import { Module } from '@nestjs/common';
import { ManagmentService } from './managment.service';
import { ManagmentController } from './managment.controller';

@Module({
  controllers: [ManagmentController],
  providers: [ManagmentService],
})
export class ManagmentModule {}
