import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor(private studentsService: StudentsService){}

    @Get()
    getallStudents(){
        return this.studentsService.getStudents();
    }

    @Get(':id')
    getStudent(@Param('id') id: number){
        return this.studentsService.getStudentsById(Number(id));
    }

    @Post()
    createStudent(@Body() body: {name: string, age: number}){
        return this.studentsService.createStudent(body);
    }

    @Put(':id')
    putStudent(
        @Param('id') id:number,
        @Body() body: {name: string, age: number}
    ){
        return this.studentsService.updateStudent(Number(id), body)
    }

    @Patch(':id')
    patchStudent(
        @Param('id') id: number,
        @Body() body: Partial<{name: string, age: number}>
    ){
        return this.studentsService.patchStudent(Number(id), body);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.studentsService.deleteStudent(Number(id));
    }
}
