import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto, TaskDto } from './dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Get workspace tasks' })
  findAll(): TaskDto[] {
    return this.tasksService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create new task' })
  create(@Body() createTaskDto: CreateTaskDto): TaskDto {
    return this.tasksService.create(createTaskDto);
  }
}
