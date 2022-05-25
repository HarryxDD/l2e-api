import { Activity } from "src/activity/model/activity";
import { User } from "src/user/model/user"

export class CreateActAuditlogDTO {
    activityId: Activity;
    userId: User;
}