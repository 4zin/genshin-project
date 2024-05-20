import { Body, Controller, Get, Post } from '@nestjs/common';
import { FactionsService } from './factions.service';
import { FactionDto } from './dto/factions.dto';

@Controller('factions')
export class FactionsController {
  constructor(private readonly factionsService: FactionsService) {}

  @Get()
  getAllFactions() {
    return this.factionsService.getAllFactions()
  }

  @Post()
  createFaction(@Body() faction: FactionDto) {
    return this.factionsService.createFaction(faction)
  }

}
