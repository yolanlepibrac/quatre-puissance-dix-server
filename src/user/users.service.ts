import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './schemas/users.interface';
import { CreateUserDto } from './schemas/create-users.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  createToken(email: string, password: string) {
    const token = this.jwtService.sign({ email: email, password: password });
    return token;
  }

  async addUser(CreateUserDTO: CreateUserDto): Promise<User> {
    const token = this.createToken(CreateUserDTO.email, CreateUserDTO.password);
    CreateUserDTO.password = token;
    console.log(CreateUserDTO.password);
    const newUser = await new this.userModel(CreateUserDTO);
    return newUser.save();
  }

  async getUserByMail(email): Promise<User> {
    return this.userModel.findOne({ email: email }).exec();
  }

  async getUserByMailAndVerify(email, password): Promise<User> {
    const user = await this.userModel.findOne({ email: email }).exec();
    const token = this.jwtService.decode(user.password)['password'];
    console.log(password);
    console.log(token);
    if (password === token) {
      console.log('connection ok');
      return user;
    } else {
      return null;
    }
  }

  async setUserGame(email: string, id: string): Promise<User> {
    const user = await this.userModel.findOne({ email: email }).exec();
    if (user) {
      user.games.push(id);
      return user.save();
    }
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
