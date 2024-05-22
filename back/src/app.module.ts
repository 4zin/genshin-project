import { Module } from '@nestjs/common';
import { CharacterModule } from './character/character.module';
import { ElementModule } from './element/element.module';
import { NationModule } from './nation/nation.module';
import { WeaponModule } from './weapon/weapon.module';
import { FactionsModule } from './factions/factions.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CharacterModule, ElementModule, NationModule, WeaponModule, FactionsModule, CloudinaryModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule { }
