import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDTO } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './model/item';

@Injectable()
export class ItemService {
    constructor(
        @InjectModel('Item') private itemModel: Model<Item>,
    ) {}

    async createItem(createItemDTO: CreateItemDTO): Promise<Item> {
        const newItem = new this.itemModel(createItemDTO);
        return await newItem.save();
    }

    async findItems(): Promise<Item[]> {
        return await this.itemModel.find().populate("ownerId");
    }

    async findItemsByOwner(ownerId: string): Promise<Item[]> {
        return await this.itemModel.find({ ownerId });
    }

    async updateOwnerOfItem(itemId: string, ownerId: UpdateItemDto): Promise<Item> {
        return await this.itemModel.findOneAndUpdate({ itemId }, ownerId);
    }
}
