import { ResponseMessage } from '@/response-message';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { User, UserListItem } from './user';
import { UsersService } from './users.service';

@Controller("/users")
export class UsersController {

  constructor(
    private readonly users: UsersService
  ) {}

  @Get("/")
  async listUsers(): Promise<ResponseMessage<UserListItem[]>> {
    return {
      error: false,
      data: await this.users.getAllUsers()
    };
  }

  @Get("/:id")
  async getUserDetails(@Param("id") id: string): Promise<ResponseMessage<User>> {
    const user = await this.users.getUserDetailById(id);

    if (!user) {
      throw new NotFoundException({
        error: true,
        message: "Could not find user by provided ID"
      });
    }

    return {
      error: false,
      data: user
    };
  }
}