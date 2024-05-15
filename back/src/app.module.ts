import { Module } from '@nestjs/common';
import { CharacterModule } from './character/character.module';
import { ElementModule } from './element/element.module';
import { NationModule } from './nation/nation.module';
import { WeaponModule } from './weapon/weapon.module';
import { FactionsModule } from './factions/factions.module';

@Module({
  imports: [CharacterModule, ElementModule, NationModule, WeaponModule, FactionsModule],
})
export class AppModule { }
