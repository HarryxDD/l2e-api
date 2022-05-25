import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { Todo } from './model/todo';

@Injectable()
export class TodoService {
    constructor(
        @InjectModel('Todo') private todoModel: Model<Todo>,
    ) {}

    async createTodo(createTodoDTO: CreateTodoDTO): Promise<Todo> {
        const newTodo = new this.todoModel(createTodoDTO);
        return await newTodo.save();
    }

    async findTodos(): Promise<Todo[]> {
        return await this.todoModel.find().populate("userId");
    }

    async findTodoByUser(userId: string): Promise<Todo[]> {
        return await this.todoModel.find({ userId });
    }
}
