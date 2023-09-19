import { Injectable } from '@nestjs/common';
import { GameDto } from './game.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class GameService {
    constructor(@InjectModel(GameDto.name) private gameModel) { }

    getGameList() {
        return "This is a list of games."
    }

    addGame(game: GameDto) {
        console.log(game)
        const newGame = new this.gameModel(game)
        return newGame.save()
    }
}
