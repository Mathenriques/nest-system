import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getHello() {
    const userCreated = await this.prismaService.user.create({
      data: {
        name: "Matheus Henriques",
        email: "math.marqui@gmail.com"
      }
    })

    return {
      userCreated
    }
  }
}
