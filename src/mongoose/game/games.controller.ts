import { Controller, Get, Post, Req } from '@nestjs/common';
import { GamesService } from './games.service';
import { Request } from 'express';

@Controller('game')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  create(): string {
    return 'This action adds a new game';
  }

  @Get()
  getHello(): string {
    return this.gamesService.getHello();
  }
}
