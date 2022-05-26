import { Module } from '@nestjs/common';
import { StoreItemService } from './store-item.service';
import { StoreItemController } from './store-item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreItemSchema } from './model/store-item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'StoreItem', schema: StoreItemSchema }]),
  ],
  providers: [StoreItemService],
  controllers: [StoreItemController],
  exports: [StoreItemService]
})
export class StoreItemModule {}
