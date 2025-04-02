import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';

@Controller('users') // Define a rota base como /users
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() data: Partial<User>): Promise<User> {
    return this.userService.create(data);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<User | null> {
    return this.userService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<User>,
  ): Promise<User | null> {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.userService.delete(id);
  }
}
