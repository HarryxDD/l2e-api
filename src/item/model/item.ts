import { User } from "src/user/model/user"

export interface Item extends Document {
    name: string,
    desc: string,
    ownerId: User,
    image: string,
}