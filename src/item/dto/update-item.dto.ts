import { User } from "src/user/model/user";

export class UpdateItemDto {
    name?: string;
    desc?: string;
    ownerId: User;
    image?: string;
}