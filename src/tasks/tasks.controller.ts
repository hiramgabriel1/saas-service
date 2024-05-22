import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  add(@Body() data: any){
    return this.tasksService.addTask(data)
  }

  @Get()
  show(){
    return this.tasksService.getTasks()
  }
}
