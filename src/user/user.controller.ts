import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateTodoDTO } from "src/todo/dto/create-todo.dto";
import { Todo } from "src/todo/model/todo";
import { TodoService } from "src/todo/todo.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./model/user";
import { UserService } from "./user.service";

@Controller('user')
export class UsersController {
    constructor(
        private userService: UserService,
        private todoService: TodoService
    ) {}

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<User> {
        return this.userService.getUserById(id);
    }

    @Get()
    async getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Patch(':id') 
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        // Have not encrypt the password yet
        return this.userService.updateUser(id, updateUserDto);
    }

    @Get('todo/:id')
    async getTodos(@Param('id') id: string): Promise<Todo[]> {
        return this.todoService.findTodoByUser(id);
    }

    @Post('todo')
    async createTodo(@Body() createTodoDTO: CreateTodoDTO): Promise<Todo> {
        return await this.todoService.createTodo(createTodoDTO);
    }
}