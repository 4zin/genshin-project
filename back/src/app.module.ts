import { Module } from '@nestjs/common';
import { CharacterModule } from './character/character.module';
import { ElementModule } from './element/element.module';
import { NationModule } from './nation/nation.module';

@Module({
  imports: [CharacterModule, ElementModule, NationModule],
})
export class AppModule { }
