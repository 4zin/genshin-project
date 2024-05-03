import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ElementService } from './element.service';
import { ElementDto } from './dto/element.dto';

@Controller('elements')
export class ElementController {
  constructor(private readonly elementService: ElementService) { }

  @Get()
  async getAllElements() {
    return await this.elementService.getAllElements();
  }

  @Get(':id')
  async getElementById(@Param('id') id: string) {
    const elementFound = await this.elementService.getElementById(id)

    if (!elementFound) throw new HttpException(`Element with id ${id} not found`, HttpStatus.NOT_FOUND)

    return elementFound

  }

  @Post()
  async createElements(@Body() element: ElementDto) {
    return await this.elementService.createElements(element)
  }

}
