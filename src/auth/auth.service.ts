import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async findUser(email: string, pass: string): Promise<any> {
    console.log('find user');
    const user = await this.usersService.findOne(email);
    console.log(user);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  createToken(email: string, password: string) {
    const token = this.jwtService.sign({ email: email, password: password });
    return token;
  }

  async register(user: any) {
    let token = this.createToken(user.email, user.password);
  }

  async login(user: any) {
    const userObject = await this.usersService.findOne(user.email);
    const password = this.jwtService.decode(userObject.token)['password'];
    console.log(password);
    console.log(user.password);
    if (password === user.password) {
      console.log('connectin ok');
      return userObject;
    }
    /* const payload = { email: user.email, sub: user.userId };
    console.log(user.email);
    console.log(user.userId);
    const userObject = user;
    userObject.access_token = this.jwtService.sign(payload);
    return {
      access_token: userObject,
    }; */
  }
}
