import { Controller, Get, Body, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { GameService } from './game.service';
import { GameDto } from './game.schema';

@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('game')
export class GameController {
    constructor(private gameService: GameService) { }

    @Get("games")
    getAllGames() {
        return this.gameService.getGameList()
    }

    @Post("addGame")
    addGame(@Body() game: GameDto) {
        return this.gameService.addGame(game);
    }
}
