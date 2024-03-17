import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [PrismaService],
})
export class UserModule {}
