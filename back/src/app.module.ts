import { Module } from '@nestjs/common';
import { CharacterModule } from './character/character.module';
import { ElementModule } from './element/element.module';

@Module({
  imports: [CharacterModule, ElementModule],
})
export class AppModule { }
