import { Injectable } from '@nestjs/common';
import { profile } from 'console';
import { randomUUID } from 'crypto';
import type { createProfileDto, updateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfilesService {
    private Profiles = [
        {
            id:randomUUID(),
            name: "Avanika",
            email: "avanika@anvi.co",
        },
        {
            id: randomUUID(),
            name: "Srija",
            email: "srija@anvi.co",
        },
        {
            id:randomUUID(),
            name: "Vaishnavi",
            email: "vaishnavi@anvi.co",
        },
    ]

    findall(){
        return this.Profiles;
    }

    findOne(id : string){
        return this.Profiles.find((profile) => profile.id === id);
    }

    create(createProfileDto: createProfileDto){
        const newProfile = {
            id: randomUUID(),
            ...createProfileDto
        };
        this.Profiles.push(newProfile);
        return newProfile;
    }

    update(id:string, updateProfileDto: updateProfileDto){
        const updatedProfile = this.Profiles.find((profile) => profile.id === id);
        if(!updatedProfile){
            return {}
        }
        if(updateProfileDto.name){
            updatedProfile.name = updateProfileDto.name
        }

        if(updateProfileDto.email){
            updatedProfile.email = updateProfileDto.email
        }

        return updatedProfile;
    }

    remove(id: string): void{
        const deleteID = this.Profiles.findIndex((deleteProfile) => deleteProfile.id === id);
        if(deleteID > -1){
            this.Profiles.splice(deleteID,1);
        }
    }
}
