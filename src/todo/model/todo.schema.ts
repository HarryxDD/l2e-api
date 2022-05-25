import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: Boolean, required: true }
})
