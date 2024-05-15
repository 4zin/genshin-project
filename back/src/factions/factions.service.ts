import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FactionsService {

    constructor(private prisma: PrismaService){}

    async getAllFactions() {
        return await this.prisma.factions.findMany()
    }

}
