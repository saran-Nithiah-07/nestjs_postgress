import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/CreateUser.dto';
import { CreateUserAccountDto } from 'src/dtos/CreateUserAccount.dto';
import { UpdateUserDto } from 'src/dtos/UpdateUser.dto';


@Controller('users')
export class UsersController {
    userService: any;
    updateUser: any;
    deleteUser: any;
    createUserAccountDto: any;
    createUserAcountDto: any;

    @Get()
    getUsers() {
        return this.userService.findUsers();
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Put(':id')
    async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        await this.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number) {
        await this.deleteUser(id);
    }

    @Post(':id/Accounts')
    createUserAccount(@Param('id', ParseIntPipe) id: number, @Body() createUserAccountDto: CreateUserAccountDto,) {
        return this.userService.CreateUserAccount(id, createUserAccountDto)
    }
}
