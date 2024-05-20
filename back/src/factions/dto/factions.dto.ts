import { IsNotEmpty, IsString } from 'class-validator'

export class FactionDto {
    id?: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    nationId: string
  }