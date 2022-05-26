import { User } from "src/user/model/user";
import { Document } from "mongoose";

export interface Item extends Document {
    name: string,
    desc: string,
    image: string,
}