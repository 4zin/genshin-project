import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterDto } from './dto/character.dto';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) { }

  @Get()
  getAllCharacters() {
    return this.characterService.getAllCharacter()
  }

  @Get('/:id')
  getCharacterById(@Param('id') id: string) {
    return this.characterService.getCharacterById(id)
  }

  @Post()
  createCharacter(@Body() character: CharacterDto) {
    return this.characterService.createCharacter(character)
  }

}
