import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './schemas/project.schema';
import { Model } from 'mongoose';
import { Developer } from './schemas/developer.schema';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(Project.name) private projectModel: Model<Project>,
        @InjectModel(Developer.name) private developerModel: Model<Developer>,
    ){}

    async seed(): Promise<{ dev1: Developer; dev2: Developer}>{
        const [projectA, projectB] = await Promise.all([
            this.projectModel.create({
                title: 'Nest Crm'
            }),
            this.projectModel.create({
                title: 'PostgreSql'
            })
        ]);

        const [dev1, dev2] = await Promise.all([
            this.developerModel.create({
                name: "Avanika",
                projects : [projectA._id, projectB._id],
            }),
            this.developerModel.create({
                name: "Srija",
                projects: [projectA._id],
            }),
        ])

        await Promise.all([
            this.projectModel.findByIdAndUpdate
            ( projectA._id, {
                $set: {developers: [dev1._id, dev2._id]}
            }),
            this.projectModel.findByIdAndUpdate
            ( projectB._id, {
                $set: {developers: [dev1._id]}
            })
        ])
        return {dev1, dev2};
    }

    async getDevelopers(){
        return this.developerModel.find().populate('projects').lean();
    }
    async getProjects(){
        return this.projectModel.find().populate('developers').lean();
    }
}
