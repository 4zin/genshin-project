import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ElementDto } from './dto/element.dto';

@Injectable()
export class ElementService {

  constructor(private prisma: PrismaService) { }

  async getAllElements() {
    return await this.prisma.elements.findMany()
  }

  async getElementById(id: string) {
    return await this.prisma.elements.findUnique({
      where: { id },
    })
  }

  async createElements(element: ElementDto) {
    return await this.prisma.elements.create({ data: element })
  }

}
