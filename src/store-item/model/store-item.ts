import { Document } from "mongoose";
import { Item } from "src/item/model/item";
import { User } from "src/user/model/user";

export interface StoreItem extends Document {
    itemId: Item,
    price: number, // let people decide the price
    owner: User | undefined,
    available: boolean,
}