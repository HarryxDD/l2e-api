import * as mongoose from 'mongoose';

export const ActAuditlogSchema = new mongoose.Schema({
    activityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity'},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})