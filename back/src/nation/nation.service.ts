import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { NationDto } from './dto/nation.dto';

@Injectable()
export class NationService {

  constructor(private prisma: PrismaService) { }

  async getAllNations() {
    return await this.prisma.nation.findMany({
      select: {
        id: true,
        name: true,
        element: true
      }
    })
  }

  async getNationById(id: string) {
    return await this.prisma.nation.findUnique({
      where: { id },
      select: {
        name: true,
        element: true
      }
    })
  }

  async createNation(nation: NationDto) {
    return await this.prisma.nation.create({ data: nation })
  }

  async deleteNation(id: string) {
    return await this.prisma.nation.delete({ where: { id } })
  }

}
