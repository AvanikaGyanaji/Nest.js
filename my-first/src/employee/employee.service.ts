import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel(Employee.name) private employeeModel: Model<Employee>,
        @InjectModel(Profile.name) private profileModel: Model<Profile>,
    ){}

    async createEmployee(){
        const profile1 = await new this.profileModel({
            age: 24,
            qualifications: 'Masters'
        }).save();
        const profile2 = await new this.profileModel({
            age: 20,
            qualifications: 'MBA'
        }).save();
        const employee = new this.employeeModel({
            name: "Avanika",
            profiles: [profile1._id, profile2._id]
        });
        return employee.save();
    }

    async findAll(){
        return this.employeeModel.find().populate('profiles').exec();
    }
}
