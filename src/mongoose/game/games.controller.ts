import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Body,
  Put,
  Query,
  Delete,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { Request } from 'express';
import { CreateGameDto } from './create-game.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  create(): string {
    return 'This action adds a new game';
  }

  @Post('/new')
  async addGame(@Res() res, @Body() CreateGameDto: CreateGameDto) {
    const newGame = await this.gamesService.addGame(CreateGameDto);
    return res.status(HttpStatus.OK).json({
      message: 'Game has been submitted successfully!',
      game: newGame,
    });
  }

  @Post('/getUserGames')
  async getuserGames(@Res() res, @Body() body) {
    console.log(body.games);
    const mygames = await this.gamesService.getGames(body.games);
    console.log(mygames);
    return res.status(HttpStatus.OK).json({
      games: mygames,
    });
  }

  @Post('/update')
  async updateGame(@Res() res, @Body() body) {
    console.log(body.game);
    const newGame = await this.gamesService.updateGame(body.game);
    console.log(newGame);
    return res.status(HttpStatus.OK).json({
      game: newGame,
    });
  }

  @Get()
  getHello(): string {
    return this.gamesService.getHello();
  }
}
