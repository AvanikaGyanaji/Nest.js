import { Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor(private projectService: ProjectService){}

    @Post('seed')
    async create(){
       return this.projectService.seed();
    }

    @Get('developers')
    async getDevelopers(){
        return this.projectService.getDevelopers();
    }

    @Get('projects')
    async getProjects(){
        return this.projectService.getProjects();
    }
}
