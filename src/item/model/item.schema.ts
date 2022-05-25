import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    image: { type: String, required: true },
})