import { Module } from '@nestjs/common';
import { FactionsService } from './factions.service';
import { FactionsController } from './factions.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FactionsController],
  providers: [FactionsService, PrismaService],
})
export class FactionsModule {}
