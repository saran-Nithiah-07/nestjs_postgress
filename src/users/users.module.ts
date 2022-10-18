import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/entities/User';
import { Account } from 'src/entities/accounts';

@Module({
  imports: [TypeOrmModule.forFeature([User, Account])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
