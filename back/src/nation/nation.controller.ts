import { Body, Controller, Get, Post } from '@nestjs/common';
import { NationService } from './nation.service';
import { NationDto } from './dto/nation.dto';

@Controller('nation')
export class NationController {
  constructor(private readonly nationService: NationService) { }

  @Get()
  getAllNations() {
    return this.nationService.getAllNations()
  }

  @Post()
  createNation(@Body() nation: NationDto) {
    return this.nationService.createNation(nation)
  }
}
