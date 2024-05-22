import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CharacterDto } from './dto/character.dto';
import { Character } from '@prisma/client';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class CharacterService {

  constructor(
    private prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService
  ) { }

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

  async createCharacter(character: CharacterDto, file: Express.Multer.File): Promise<Character> {
    
    const nation = await this.prisma.nation.findUnique({
      where: {id: character.nationId}
    })

    if (!nation) throw new Error(`Nation with id ${character.nationId} not found`)

      const factions = await Promise.all(character.factions.map(async (faction) => {
        const existingFaction = await this.prisma.factions.findUnique({
              where: {
                name: faction.name,
                nationId: nation.id
              }
          });
  
          if (existingFaction) {
              return {
                  where: { id: existingFaction.id },
                  create: { name: faction.name, nationId: nation.id },
              };
          } else {
              return {
                  where: { name: faction.name, nationId: nation.id },
                  create: { name: faction.name, nationId: nation.id },
              };
          }
      }));

    const cloudinaryResult = await this.cloudinaryService.uploadFile(file);

    return await this.prisma.character.create({
      data: {
        ...character,
        factions: {
          connectOrCreate: factions
        },
        Image: {
          create: {
            url: cloudinaryResult.secure_url
          }
        }
      }
    });
  }
}
