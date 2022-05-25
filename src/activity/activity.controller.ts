import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDTO } from './dto/create-activity.dto';
import { Activity } from './model/activity';

@Controller('activity')
export class ActivityController {
    constructor(private activityService: ActivityService) {}

    @Post()
    async createActivity(@Body() createActivityDTO: CreateActivityDTO): Promise<Activity> {
        return await this.activityService.createActivity(createActivityDTO);
    }

    @Get()
    async getActivities(): Promise<Activity[]> {
        return await this.activityService.findActivities();
    }

    @Get(':id')
    async getActivityById(@Param('id') activityId: string): Promise<Activity> {
        return await this.activityService.findActivityById(activityId);
    }
}
