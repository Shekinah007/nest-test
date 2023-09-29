import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema, User, UserSchema } from 'src/schema/user.schema';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';


@Module({
  imports: [JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: "60s" }

  }), UserModule, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, { name: Cat.name, schema: CatSchema }]),],
  controllers: [AuthController],
  providers: [AuthService, UserService]
})
export class AuthModule { }
