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
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller('app')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  /* @UseGuards(LocalAuthGuard) */
  @Post('auth/login')
  async login(@Res() res, @Body() body) {
    console.log('user :' + body.email);
    return this.authService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
}
