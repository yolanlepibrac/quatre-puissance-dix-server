import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Game } from './games.interface';
import { CreateGameDto } from './create-game.dto';

@Injectable()
export class GamesService {
  constructor(
    @Inject('GAME_MODEL')
    private readonly userModel: Model<Game>,
  ) {}

  async create(createCatDto: CreateGameDto): Promise<Game> {
    const createdCat = new this.userModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Game[]> {
    return this.userModel.find().exec();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
