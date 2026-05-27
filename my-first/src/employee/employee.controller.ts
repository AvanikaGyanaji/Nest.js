import { Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}

    @Post()
    async CreateEmployee(){
        return this.employeeService.createEmployee();
    }

    @Get()
    async fndall(){
        return this.employeeService.findAll()
    }
}
