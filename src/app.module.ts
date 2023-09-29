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
import { MovieModule } from './movie/movie.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule, MongooseModule.forRoot('mongodb://0.0.0.0:27017'),
    // UserModule, MongooseModule.forRoot('mongodb+srv://shalomsheks:shekssheks@nodetuts.m5oxomk.mongodb.net/nestjs-demo'),
    BookModule, MemberModule, GameModule, CarModule, MovieModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
