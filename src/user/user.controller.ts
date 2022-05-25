import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ActAuditlogService } from "src/act-auditlog/act-auditlog.service";
import { CreateActAuditlogDTO } from "src/act-auditlog/dto/create-actauditlog.dto";
import { UpdateItemDto } from "src/item/dto/update-item.dto";
import { ItemService } from "src/item/item.service";
import { Item } from "src/item/model/item";
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
        private todoService: TodoService,
        private actAuditlogService: ActAuditlogService,
        private itemService: ItemService,
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
    async getTodos(@Param('id') userId: string): Promise<Todo[]> {
        return this.todoService.findTodoByUser(userId);
    }

    @Post('todo')
    async createTodo(@Body() createTodoDTO: CreateTodoDTO): Promise<Todo> {
        return await this.todoService.createTodo(createTodoDTO);
    }

    @Post('activity')
    async joinActivity(@Body() createActAuditlogDTO: CreateActAuditlogDTO) {
        return await this.actAuditlogService.createActAuditlog(createActAuditlogDTO);
    }

    @Patch('item/:itemId') 
    async buyItem(@Param('itemId') itemId: string, @Body() updateItemDto: UpdateItemDto) {
        // Need to have the store
        return await this.itemService.updateOwnerOfItem(itemId, updateItemDto);
    }

    @Get('item/:ownerId')
    async getItemsByOwner(@Param('ownerId') ownerId: string): Promise<Item[]> {
        return this.itemService.findItemsByOwner(ownerId);
    }

}