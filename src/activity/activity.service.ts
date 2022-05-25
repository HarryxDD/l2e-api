import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateActivityDTO } from './dto/create-activity.dto';
import { Activity } from './model/activity';

@Injectable()
export class ActivityService {
    constructor(
        @InjectModel('Activity') private activityModel: Model<Activity>,
    ) {}

    async createActivity(createActivityDTO: CreateActivityDTO): Promise<Activity> {
        const newActivity = new this.activityModel(createActivityDTO);
        return await newActivity.save();
    }

    async findActivities(): Promise<Activity[]> {
        return await this.activityModel.find({});
    }

    async findActivityById(activityId: string): Promise<Activity> {
        return await this.activityModel.findOne({ activityId });
    }
}
