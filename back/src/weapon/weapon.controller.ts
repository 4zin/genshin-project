import { Body, Controller, Get, Post } from '@nestjs/common';
import { WeaponService } from './weapon.service';
import { WeaponsDto } from './dto/weapons.dto';

@Controller('weapon')
export class WeaponController {
  constructor(private readonly weaponService: WeaponService) {}

  @Get()
  getAllWeapons() {
    return this.weaponService.getAllWeapons()
  }

  @Post()
  createWeapon(@Body() weapons: WeaponsDto){
    return this.weaponService.createWeapon(weapons)
  }

}
