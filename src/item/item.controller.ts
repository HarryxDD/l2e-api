import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StoreItem } from 'src/store-item/model/store-item';
import { StoreItemService } from 'src/store-item/store-item.service';
import { CreateItemDTO } from './dto/create-item.dto';
import { ItemService } from './item.service';
import { Item } from './model/item';

@Controller('item')
export class ItemController {
    constructor(
        private itemService: ItemService,
        private storeService: StoreItemService
    ) {}

    @Post()
    async createItem(@Body() createItemDTO: CreateItemDTO): Promise<Item> {
        return await this.itemService.createItem(createItemDTO);
    }

    @Get()
    async getItems(): Promise<Item[]> {
        return await this.itemService.findItems();
    }

    @Get(':itemId')
    async getItemOnStore(@Param('itemId') itemId: string ): Promise<StoreItem> {
        return await this.storeService.findItemOnStore(itemId);
    }
}
