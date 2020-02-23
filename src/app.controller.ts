import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Body,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './mongoose/user/users.service';
import { GamesService } from './mongoose/game/games.service';
import { Request } from 'express';

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
    private readonly gameService: GamesService,
  ) {}

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/login')
  async getUser(@Res() res, @Body() body) {
    console.log(body);
    const user = await this.userService.getUsersByMail(body.email);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    //get all games of user
    const games = await this.gameService.getGames(user.games);
    res.status(HttpStatus.OK).json({ user: user, games: games });
  }
}
