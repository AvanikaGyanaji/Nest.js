import { Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';

@Controller('exxception')
@UseFilters(HttpExceptionFilter)
export class ExxceptionController {

    @Get('hello/:id')
    getHello(@Param('id', ParseIntPipe) id: number){
        return {message: `hello user ${id}`}
    }
}
