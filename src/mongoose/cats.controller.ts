import { Controller, Get, Post, Req } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Request } from 'express';

@Controller('cat')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  getHello(): string {
    return this.catsService.getHello();
  }
}
