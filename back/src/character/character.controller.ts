import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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
  async getCharacterById(@Param('id') id: string) {

    const characterFound = await this.characterService.getCharacterById(id)

    if (!characterFound) throw new HttpException('Character not found', HttpStatus.NOT_FOUND)

    return characterFound
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createCharacter(@Body() character: CharacterDto) {
    return this.characterService.createCharacter(character)
  }

}
