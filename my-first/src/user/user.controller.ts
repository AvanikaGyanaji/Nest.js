import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    async getUsers(){
        return this.userService.getUsers();
    }

    @Get(':id')
    async getUsersById(@Param('id') id: string){
        return this.userService.getUserById(id);
    }

    @Post()
    async createUser(){
        return this.userService.createUser();
    }

}
