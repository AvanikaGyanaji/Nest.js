import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name) private studentModel: Model<StudentDocument>
    ){}

    async getAllStudents(): Promise<Student[]>{
        return this.studentModel.find().exec();
    }

    async getStudentById(id: string): Promise<Student | null>{
        return this.studentModel.findById(id).exec();
    }

    async createStudent(data: Partial<Student>): Promise<Student>{
        const newStudent = new this.studentModel(data);
        return newStudent.save();
    }

    async updateStudent(id: string, data: Partial<Student>): Promise<Student | null >{
        const updated = await this.studentModel.findByIdAndUpdate
        (id, {
            name: data.name ?? null,
            age: data.age ?? null,
            email: data.email ?? null
        }, {overwrite: true, new:true}) ;  
        return updated; 
    }

    async PatchStudent(id: string, data: Partial<Student>): Promise<Student | null >{
        return this.studentModel.findByIdAndUpdate(id, data, {new: true}).exec();    
    }

    async deleteStudent(id: string): Promise<Student | null>{
        return this.studentModel.findByIdAndDelete(id);
    }
}
