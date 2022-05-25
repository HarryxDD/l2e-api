import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { Todo } from './model/todo';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Post()
    async createTodo(@Body() createTodoDTO: CreateTodoDTO): Promise<Todo> {
        return await this.todoService.createTodo(createTodoDTO);
    }

    @Get()
    async getTodos(): Promise<Todo[]> {
        return await this.todoService.findTodos();
    }
}
