import { Activity } from "src/activity/model/activity"
import { User } from "src/user/model/user"

export interface ActAuditlog extends Document {
    activityId: Activity,
    userId: User,
}