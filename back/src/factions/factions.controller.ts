import { Controller, Get } from '@nestjs/common';
import { FactionsService } from './factions.service';

@Controller('factions')
export class FactionsController {
  constructor(private readonly factionsService: FactionsService) {}

  @Get()
  getAllFactions() {
    return this.factionsService.getAllFactions()
  }
}
