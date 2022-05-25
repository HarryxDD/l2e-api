import { User } from "src/user/model/user";

export class CreateItemDTO {
    name: string;
    desc: string;
    ownerId: User;
    image: string;
}