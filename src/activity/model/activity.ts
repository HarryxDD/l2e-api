import { Document } from "mongoose";

export interface Activity extends Document {
    title: string,
    desc: string,
    credit: number, // points received for participating
}