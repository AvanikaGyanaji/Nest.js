import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus} from '@nestjs/common';
import { createProfileDto, updateProfileDto } from './dto/create-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
    constructor(private ProfilesService: ProfilesService ){}

    //get Profiles
    @Get()
    findall(){
        return this.ProfilesService.findall();
    }

    
    /* @Get()
    findall (@Query('location') location: string) {
        return [{location}];
    } */

    //GET Profiles/id
    @Get(':id')
    findOne(@Param("id") id:string){
        return this.ProfilesService.findOne(id);
    }

    //POST Profiles
    @Post()
    create(@Body() createProfileDto: createProfileDto){
        console.log('POST HIT:', createProfileDto);
        return this.ProfilesService.create(createProfileDto);
    }

    //PUT/profiles/:id
    @Put(':id')
    update(
        @Param("id") id:string,
        @Body() updateProfileDto: updateProfileDto
    )
    {
        console.log('PUT HIT:', updateProfileDto);
        return this.ProfilesService.update(id,updateProfileDto);
    }

    //DELETE profiles/id
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param("id") id: string){
        this.ProfilesService.remove(id);
    }

}
