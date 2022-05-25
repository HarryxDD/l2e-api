import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateActAuditlogDTO } from './dto/create-actauditlog.dto';
import { ActAuditlog } from './model/act-auditlog';

@Injectable()
export class ActAuditlogService {
    constructor(
        @InjectModel('ActAuditlog') private actAuditlogModel: Model<ActAuditlog>,
    ) {}

    async createActAuditlog(createAuditlogDTO: CreateActAuditlogDTO): Promise<ActAuditlog> {
        const newAuditlog = new this.actAuditlogModel(createAuditlogDTO);
        return await newAuditlog.save();
    }
}
