import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { NationService } from './nation.service';
import { NationDto } from './dto/nation.dto';

@Controller('nation')
export class NationController {
  constructor(private readonly nationService: NationService) { }

  @Get()
  getAllNations() {
    return this.nationService.getAllNations()
  }

  @Get(':id')
  async getNationById(@Param('id') id: string) {
    const nationFound = await this.nationService.getNationById(id)

    if (!nationFound) throw new HttpException(`Nation with id ${id} not found`, HttpStatus.NOT_FOUND)

    return nationFound

  }

  @Post()
  createNation(@Body() nation: NationDto) {
    return this.nationService.createNation(nation)
  }

  @Delete(':id')
  deleteNation(@Param('id') id: string) {
    return this.nationService.deleteNation(id)
  }
}
