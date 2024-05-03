import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CharacterDto } from './dto/character.dto';

@Injectable()
export class CharacterService {

  constructor(private prisma: PrismaService) { }

  async getAllCharacter() {
    return await this.prisma.character.findMany({
      select: {
        name: true,
        title: true,
        element: {
          select: {
            name: true
          }
        },
        nation: {
          select: {
            name: true
          }
        }
      }
    })
  }

  async getCharacterById(id: string) {
    return await this.prisma.character.findUnique({
      where: { id },
      select: {
        name: true,
        title: true,
        element: true,
        nation: {
          select: {
            name: true,
            element: true
          }
        }
      }
    })
  }

  async createCharacter(character: CharacterDto) {
    return await this.prisma.character.create({ data: character })
  }

}
