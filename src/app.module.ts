import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './books/book.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [BookModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
