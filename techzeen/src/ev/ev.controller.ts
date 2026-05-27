import { Controller, Get } from '@nestjs/common';
import { EvService } from './ev.service';

@Controller('ev')
export class EvController {
    constructor(private evService: EvService){}

    @Get()
    gerURL(){
        return this.evService.getDbUrl();
    }
}
