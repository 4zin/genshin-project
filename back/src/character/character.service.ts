import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CharacterDto } from './dto/character.dto';
import { Character } from '@prisma/client';

@Injectable()
export class CharacterService {

  constructor(private prisma: PrismaService) { }

  async getAllCharacter() {
    
    const characters = await this.prisma.character.findMany({
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
        },
        factions: {
          select: {
            name: true
          }
        }
      }
    })

    return characters.map((character) => ({
      ...character,
      factions: character.factions.map((faction) => faction.name)
    }))
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

    const factions = await Promise.all(character.factions.map(async (faction) => {
      const existingFaction = await this.prisma.factions.findUnique({
            where: {name: faction.name}
        });

        if (existingFaction) {
            return {
                where: { id: existingFaction.id },
                create: { name: faction.name },
            };
        } else {
            return {
                where: { name: faction.name },
                create: { name: faction.name },
            };
        }
  }));

    return await this.prisma.character.create({
      data: {
        ...character,
        factions: {
          connectOrCreate: factions
        }
      }
    });
  }
}
