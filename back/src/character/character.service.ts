import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CharacterDto } from './dto/character.dto';
import { Character } from '@prisma/client';

@Injectable()
export class CharacterService {

  constructor(private prisma: PrismaService) { }

  getAllCharacter() {
    return this.prisma.character.findMany({
      select: {
        id: true,
        name: true,
        title: true,
        vision: true,
        nation: {
          select: {
            id: true,
            name: true,
            element: true
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
        vision: true,
        nation: {
          select: {
            name: true,
            element: true
          }
        }
      }
    })
  }

  async createCharacter(character: CharacterDto): Promise<Character> {
    return await this.prisma.character.create({ data: character })
  }

}
