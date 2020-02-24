import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Body,
  NotFoundException,
  HttpStatus,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './mongoose/user/users.service';
import { GamesService } from './mongoose/game/games.service';
//import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
