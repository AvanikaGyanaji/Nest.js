import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}

    @Get()
    @UseGuards(AuthGuard)
    getProducts(){
        return this.productsService.getallProducts();
    }

    @Get(':id')
    getProduct(@Param('id') id: string){
        return this.productsService.getProductID(Number(id))
    }
}
