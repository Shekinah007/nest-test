import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema, User, UserSchema } from 'src/schema/user.schema';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, { name: Cat.name, schema: CatSchema }]),],
  controllers: [AuthController],
  providers: [AuthService, UserService]
})
export class AuthModule { }
