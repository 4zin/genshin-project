import { Module } from '@nestjs/common';
import { CharacterModule } from './character/character.module';
import { ElementModule } from './element/element.module';
import { NationModule } from './nation/nation.module';
import { WeaponModule } from './weapon/weapon.module';

@Module({
  imports: [CharacterModule, ElementModule, NationModule, WeaponModule],
})
export class AppModule { }
