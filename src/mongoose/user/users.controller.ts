// users.controller.ts
import { UserService } from './users.service';
import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Body,
  Put,
  Query,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './create-users.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // Submit a user
  @Post('/register')
  async addUser(@Res() res, @Body() CreateUserDTO: CreateUserDto) {
    const newUser = await this.userService.addUser(CreateUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User has been submitted successfully!',
      user: newUser,
    });
  }

  @Get('/login')
  async getUser(@Res() res, @Param('email') email) {
    const user = await this.userService.getUsersByMail(email);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json(user);
  }

  // Fetch a particular user using ID
  @Get()
  create(@Res() res): string {
    return res.status(HttpStatus.OK).json({ users: 'one' });
  }

  // Fetch all users
  @Get('users')
  async getUsers(@Res() res) {
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json(users);
  }

  @Put('/edit')
  async editUser(
    @Res() res,
    @Query('userID') userID,
    @Body() createUserDTO: CreateUserDto,
  ) {
    const editedUser = await this.userService.editUser(userID, createUserDTO);
    if (!editedUser) {
      throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'User has been successfully updated',
      user: editedUser,
    });
  }
  // Delete a user using ID
  @Delete('/delete')
  async deleteUser(@Res() res, @Query('userID') userID) {
    const deletedUser = await this.userService.deleteUser(userID);
    if (!deletedUser) {
      throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'User has been deleted!',
      user: deletedUser,
    });
  }
}
