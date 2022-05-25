import { User } from "src/user/model/user"

export class CreateTodoDTO {
    title: string;
    desc: string;
    userId: User;
    status: boolean;
}