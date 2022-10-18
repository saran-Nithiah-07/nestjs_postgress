import { Get, HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserAccountDto } from 'src/dtos/CreateUserAccount.dto';
import { User } from 'src/entities/User';
import { CreateUserAccountParams, CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { Repository} from "typeorm";

@Injectable()
export class UsersService {
    postRepository: any;
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    @Get()
    findUsers() {
        return this.userRepository.find({ relations: ['name','accounts']});
    }

    @Post()
    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({
            ...userDetails,
    });
    return this.userRepository.save(newUser);
}
    updateUser(id: number, updateUserDerails: UpdateUserParams) {
        return this.userRepository.update({ id }, { ...updateUserDerails});
    }

    deleteUser(id: number) {
        return this.userRepository.delete({id});
    }

    async createUserAccount(
        id: number,
        createUserAccountDetails: CreateUserAccountParams,
    )  {
        const user = await this.userRepository.findOneBy({ id });
        if (!user)
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST,
        );
        const newPost = this.postRepository.create({...createUserAccountDetails,user,});
        return this.postRepository.save(newPost);
    }
}
