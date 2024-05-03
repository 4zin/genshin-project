import { Module } from '@nestjs/common';
import { NationService } from './nation.service';
import { NationController } from './nation.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [NationController],
  providers: [NationService, PrismaService],
})
export class NationModule { }
