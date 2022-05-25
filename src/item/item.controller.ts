import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateItemDTO } from './dto/create-item.dto';
import { ItemService } from './item.service';
import { Item } from './model/item';

@Controller('item')
export class ItemController {
    constructor(private itemService: ItemService) {}

    @Post()
    async createItem(@Body() createItemDTO: CreateItemDTO): Promise<Item> {
        return await this.itemService.createItem(createItemDTO);
    }

    @Get()
    async getItems(): Promise<Item[]> {
        return await this.itemService.findItems();
    }
}
