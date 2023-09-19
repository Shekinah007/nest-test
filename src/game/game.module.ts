import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GameDto, gameSchema } from './game.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: GameDto.name, schema: gameSchema }])],
  controllers: [GameController],
  providers: [GameService]
})
export class GameModule { }
