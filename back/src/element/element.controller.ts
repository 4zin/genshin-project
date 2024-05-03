import { Body, Controller, Get, Post } from '@nestjs/common';
import { ElementService } from './element.service';
import { ElementDto } from './dto/element.dto';

@Controller('elements')
export class ElementController {
  constructor(private readonly elementService: ElementService) { }

  @Get()
  getAllElements() {
    return this.elementService.getAllElements();
  }

  @Post()
  createElements(@Body() element: ElementDto) {
    return this.elementService.createElements(element)
  }

}
