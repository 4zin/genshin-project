import { IsEnum, IsNotEmpty, IsString } from "class-validator"
import { Weapon } from '@prisma/client'
import { FactionDto } from "src/factions/dto/factions.dto";

export class CharacterDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(Weapon)
  @IsNotEmpty()
  weapon: Weapon;

  factions: FactionDto[];

  @IsString()
  @IsNotEmpty()
  visionId: string;

  @IsString()
  @IsNotEmpty()
  nationId: string;

  imageUrl: string;
}