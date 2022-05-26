import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
})