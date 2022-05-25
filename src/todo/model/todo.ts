import { Document } from "mongoose";
import { User } from "src/user/model/user";

export interface Todo extends Document {
    title: string,
    desc: string,
    userId: User,
    status: boolean,
}