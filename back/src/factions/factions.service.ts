import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FactionDto } from './dto/factions.dto';

@Injectable()
export class FactionsService {

    constructor(private prisma: PrismaService){}

    async getAllFactions() {
        return await this.prisma.factions.findMany({
            select: {
                name: true,
                nation: {
                    select: {
                        name: true
                    }
                }
            }
        })
    }

    async createFaction(faction: FactionDto)
    {
        return await this.prisma.factions.create({
            data: faction
        })
    }

}
