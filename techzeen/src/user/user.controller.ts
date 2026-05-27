import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';
import { Roles } from 'src/guards/roles/roles.decorater';
import { Role } from 'src/guards/roles/roles.enum';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user')
export class UserController {
    @Post()
    createUser(@Body('name', new UppercasePipe()) name: string){
        return {message: `Received Name: ${name}`};
    }

    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAdminData(){
        return {message: 'Admin panel'}
    }

    @Get('user-data')
    getuserData(){
        return {message: 'anyone can access'}
    }
}
