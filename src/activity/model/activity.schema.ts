import * as mongoose from 'mongoose';

export const ActivitySchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    credit: { type: Number, required: true }
})
