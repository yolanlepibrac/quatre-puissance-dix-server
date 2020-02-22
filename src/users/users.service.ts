import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../mongoose/users.interface';
import { CreateUserDTO } from '../mongoose/create-users.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async addUser(CreateUserDTO: CreateUserDTO): Promise<User> {
    const newUser = await new this.userModel(CreateUserDTO);
    return newUser.save();
  }

  async getUser(userID): Promise<User> {
    const user = await this.userModel.findById(userID).exec();
    return user;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  async editUser(userID, createUserDTO: CreateUserDTO): Promise<User> {
    const editedUser = await this.userModel.findByIdAndUpdate(
      userID,
      createUserDTO,
      { new: true },
    );
    return editedUser;
  }
  async deleteUser(userID): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndRemove(userID);
    return deletedUser;
  }
}
