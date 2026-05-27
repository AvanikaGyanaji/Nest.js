import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCostomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private customers: Customer[] = [];

    getallCustomers(): Customer[]{
        return this.customers;
    }

    addCustomers(createCustomerDto: CreateCostomerDto){
        const newCustomer = {
            id: Date.now(),
            ...createCustomerDto
        }
        this.customers.push(newCustomer);
        return newCustomer;
    } 
}
