import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { WeaponsDto } from './dto/weapons.dto';
import { Weapons } from '@prisma/client';

@Injectable()
export class WeaponService {

    constructor(private prisma: PrismaService){}

    async getAllWeapons() {
        return await this.prisma.weapons.findMany()
    }

    async createWeapon(weapons: WeaponsDto): Promise<Weapons> {
        return await this.prisma.weapons.create({
            data: weapons
        })
    }

}
