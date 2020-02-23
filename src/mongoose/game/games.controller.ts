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

@Controller('game')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  create(): string {
    return 'This action adds a new game';
  }

  @Post('/new')
  async addUser(@Res() res, @Body() CreateGameDto: CreateGameDto) {
    const newUser = await this.gamesService.addGame(CreateGameDto);
    return res.status(HttpStatus.OK).json({
      message: 'User has been submitted successfully!',
      user: newUser,
    });
  }

  @Get()
  getHello(): string {
    return this.gamesService.getHello();
  }
}
