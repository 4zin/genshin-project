import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Rarity, Weapon } from "@prisma/client";

export class WeaponsDto {

    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEnum(Rarity)
    rarity: Rarity;

    @IsNotEmpty()
    @IsEnum(Weapon)
    type: Weapon;
}