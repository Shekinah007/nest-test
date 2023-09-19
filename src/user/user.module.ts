import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Cat, CatSchema, User, UserSchema } from 'src/schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, { name: Cat.name, schema: CatSchema }]),],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
