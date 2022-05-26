import * as mongoose from 'mongoose';

export const StoreItemSchema = new mongoose.Schema({
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
    price: { type: Number, required: true }, // let people decide the price
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    available: { type: Boolean, required: true },
})