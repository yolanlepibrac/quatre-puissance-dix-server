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
import { CreateUserDTO } from '../mongoose/create-users.dto';
import { ValidateObjectId } from '../pipes/validate-object-id.pipes';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // Submit a user
  @Post('/user')
  async addUser(@Res() res, @Body() CreateUserDTO: CreateUserDTO) {
    const newUser = await this.userService.addUser(CreateUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User has been submitted successfully!',
      user: newUser,
    });
  }

  // Fetch a particular user using ID
  @Get()
  create(): string {
    return 'return nothing';
  }

  // Fetch a particular user using ID
  @Get('user/:userID')
  async getUser(@Res() res, @Param('userID', new ValidateObjectId()) userID) {
    const user = await this.userService.getUser(userID);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json(user);
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
    @Query('userID', new ValidateObjectId()) userID,
    @Body() createUserDTO: CreateUserDTO,
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
  async deleteUser(
    @Res() res,
    @Query('userID', new ValidateObjectId()) userID,
  ) {
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
