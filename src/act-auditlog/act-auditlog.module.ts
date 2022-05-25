import { Module } from '@nestjs/common';
import { ActAuditlogService } from './act-auditlog.service';
import { ActAuditlogController } from './act-auditlog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ActAuditlogSchema } from './model/act-auditlog.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ActAuditlog', schema: ActAuditlogSchema }]),
  ],
  providers: [ActAuditlogService],
  controllers: [ActAuditlogController],
  exports: [ActAuditlogService],
})
export class ActAuditlogModule {}
