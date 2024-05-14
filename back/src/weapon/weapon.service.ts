import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { WeaponsDto } from './dto/weapons.dto';
import { Weapons } from '@prisma/client';

@Injectable()
export class WeaponService {

    constructor(private prisma: PrismaService){}

    getAllWeapons() {
        return this.prisma.weapons.findMany()
    }

    createWeapon(weapons: WeaponsDto): Promise<Weapons> {
        return this.prisma.weapons.create({
            data: weapons
        })
    }

}
