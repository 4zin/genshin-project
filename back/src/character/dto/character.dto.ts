import { IsNotEmpty, IsString } from "class-validator"

export class CharacterDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  visionId: string;

  @IsString()
  @IsNotEmpty()
  nationId: string;
}