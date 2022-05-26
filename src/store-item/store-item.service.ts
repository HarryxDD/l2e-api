import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStoreItemDTO } from './dto/create-storeitem.dto';
import { StoreItem } from './model/store-item';

@Injectable()
export class StoreItemService {
    constructor(
        @InjectModel('StoreItem') private storeItemModel: Model<StoreItem>,
    ) {}

    async createStoreItem(createStoreItem: CreateStoreItemDTO): Promise<StoreItem> {
        const newStoreItem = new this.storeItemModel(createStoreItem);
        return await newStoreItem.save();
    } 

    async findStoreItems(): Promise<StoreItem[]> {
        return await this.storeItemModel.find({});
    }

    async findItemOnStore(itemId: string): Promise<StoreItem> {
        return await this.storeItemModel.findOne({ itemId })
    }
}
