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
  async getuserGames(@Res() res, @Body() user) {
    const games = await this.gamesService.getGames(user.games);
    return res.status(HttpStatus.OK).json({
      games: games,
      user: user,
    });
  }

  @Get()
  getHello(): string {
    return this.gamesService.getHello();
  }
}
