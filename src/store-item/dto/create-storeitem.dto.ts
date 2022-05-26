import { Item } from "src/item/model/item"
import { User } from "src/user/model/user";

export class CreateStoreItemDTO {
    itemId: Item;
    price: number; // let people decide the price
    owner: User | undefined;
    available: boolean;
}