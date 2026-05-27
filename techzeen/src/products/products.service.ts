import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private productsData = [
        {
            id: 1,
            name: "Laptop",
            price: 50000
        },
        {
            id: 2,
            name: "Tablet",
            price: 38000
        },
        {
            id: 3,
            name: "Mobile",
            price: 25000
        },
    ];

    getallProducts(){
        return this.productsData;
    }

    getProductID(id: number){
        return this.productsData.find((productID) => productID.id === id);
    }
}
