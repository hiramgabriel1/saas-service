import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async addTask(data: any): Promise<any> {
    return this.prisma.task.create({
      data,
    });
  }

  async getTasks(): Promise<any>{
    return this.prisma.task.findMany()
  }
}