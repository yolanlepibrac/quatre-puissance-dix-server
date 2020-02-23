import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.interface';
import { CreateUserDto } from './/create-users.dto';
import { Game } from '../game/games.interface';
import { CreateGameDto } from '../game/create-game.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    @Inject('GAME_MODEL')
    private readonly userModel: Model<User>,
    private readonly gameModel: Model<Game>,
  ) {}

  // add user when register
  async addUser(CreateUserDTO: CreateUserDto): Promise<User> {
    const newUser = await new this.userModel(CreateUserDTO);
    return newUser.save();
  }

  // get user when login
  async getUsersByMail(email): Promise<User> {
    const users = await this.userModel.findOne({ email: email }).exec();
    return users;
  }

  async getGames(tabOfGames): Promise<Game[]> {
    const games = await this.gameModel.find({ id: { $in: tabOfGames } }).exec();
    return games;
  }

  async editUser(userID, createUserDTO: CreateUserDto): Promise<User> {
    const editedUser = await this.userModel.findByIdAndUpdate(
      userID,
      createUserDTO,
      { new: true },
    );
    return editedUser;
  }

  async getUser(userID): Promise<User> {
    const user = await this.userModel.findById(userID).exec();
    return user;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  async deleteUser(userID): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndRemove(userID);
    return deletedUser;
  }
}
