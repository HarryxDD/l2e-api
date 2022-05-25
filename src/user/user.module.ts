import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActAuditlogModule } from 'src/act-auditlog/act-auditlog.module';
import { ItemModule } from 'src/item/item.module';
import { TodoModule } from 'src/todo/todo.module';
import { TodoService } from 'src/todo/todo.service';
import { UserSchema } from './model/user.schema';
import { UsersController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TodoModule,
    ActAuditlogModule,
    ItemModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  providers: [UserService],
  controllers: [UsersController],
  exports: [UserService],
})
export class UserModule {}
