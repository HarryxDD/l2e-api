import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStoreItemDTO } from './dto/create-storeitem.dto';
import { StoreItem } from './model/store-item';
import { StoreItemService } from './store-item.service';

@Controller('store')
export class StoreItemController {
    constructor(private storeService: StoreItemService) {}

    @Post()
    async createStoreItem(@Body() createStoreItemDTO: CreateStoreItemDTO): Promise<StoreItem> {
        return await this.storeService.createStoreItem(createStoreItemDTO);
    }

    @Get()
    async getStoreItems(): Promise<StoreItem[]> {
        return await this.storeService.findStoreItems();
    }
}
