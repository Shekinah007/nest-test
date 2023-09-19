import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { MemberModule } from './member/member.module';
import { GameModule } from './game/game.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://0.0.0.0:27017'), BookModule, MemberModule, GameModule, CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
