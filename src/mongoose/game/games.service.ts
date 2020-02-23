import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Game } from './games.interface';
import { CreateGameDto } from './create-game.dto';

@Injectable()
export class GamesService {
  constructor(
    @Inject('GAME_MODEL')
    private readonly gameModel: Model<Game>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async addGame(createGameDto: CreateGameDto): Promise<Game> {
    const newGame = await new this.gameModel(createGameDto);
    return newGame.save();
  }

  async getGame(gameID): Promise<Game> {
    const game = await this.gameModel.findById(gameID).exec();
    return game;
  }

  async getGames(tabOfGames): Promise<Game[]> {
    const games = await this.gameModel.find({ id: { $in: tabOfGames } }).exec();
    return games;
  }

  async getAllGames(): Promise<Game[]> {
    const games = await this.gameModel.find().exec();
    return games;
  }

  async editGame(gameID, createGameDto: CreateGameDto): Promise<Game> {
    const editedGame = await this.gameModel.findByIdAndUpdate(
      gameID,
      createGameDto,
      { new: true },
    );
    return editedGame;
  }

  async deleteGame(gameID): Promise<any> {
    const deletedUGame = await this.gameModel.findByIdAndRemove(gameID);
    return deletedUGame;
  }
}
