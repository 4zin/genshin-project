import { IsEnum, IsNotEmpty, IsString } from "class-validator"
import { Weapon } from '@prisma/client'

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

  @IsString()
  @IsNotEmpty()
  visionId: string;

  @IsString()
  @IsNotEmpty()
  nationId: string;
}