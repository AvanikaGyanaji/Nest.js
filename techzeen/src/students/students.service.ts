import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentsService {
    private students = [
        {
            id: 1,
            name: "Avanika",
            age: 22,
        },
        {
            id: 2,
            name: "Srija",
            age: 22,
        },
        {
            id: 3,
            name: "Vaishnavi",
            age: 23,
        },
    ];

    getStudents(){
        return this.students
    }

    getStudentsById(id: number){
        const student = this.students.find((s) => s.id === id);
        if(!student) throw new NotFoundException('Student Not found!')
        return student;
    }

    //POST
    createStudent(data: {name: string, age: number}){
        const newStudent = {
            id: Date.now(),
            ...data
        }
        this.students.push(newStudent)
        return newStudent;
    }

    //PUT
    updateStudent(id: number, data: {name: string, age: number}){
        const index = this.students.findIndex((s) => s.id === id);
        if(index === -1) throw new NotFoundException('Student Not Found!');
        this.students[index] = {id, ...data}
        return this.students[index];
    }

    //Patch
    patchStudent(id: number, data: Partial<{ name: string, age: number}>){
        const student = this.getStudentsById(id);
        Object.assign(student, data);
        return student;
    }

    //delete
    deleteStudent(id: number){
        const index = this.students.findIndex((s) => s.id === id);
        if(index === -1) throw new NotFoundException('Student Not Found!');
        const deleted = this.students.splice(index, 1);
        return {message: 'Student data deleted', student: deleted[0]};
    }
}
