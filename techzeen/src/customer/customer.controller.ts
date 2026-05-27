import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCostomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private customerServive: CustomerService){}

    @Get()
    getCustomers(){
        return this.customerServive.getallCustomers();
    }

    @Post()
    createCustomer(@Body() createCustomerDto: CreateCostomerDto){
        return this.customerServive.addCustomers(createCustomerDto);
    }
}
