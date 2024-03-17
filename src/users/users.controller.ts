import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto } from './users-dtos';

@Controller()
export class UserController {
  constructor(private readonly prismaService: PrismaService) { }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { name, email } = createUserDto
    
    const userCreated = await this.prismaService.user.create({
      data: {
        name,
        email
      }
    })

    return {
      userCreated
    }
  }

  @Get()
  async getUser() {
    const users = await this.prismaService.user.findMany();

    return {
      users
    }
  }
}
