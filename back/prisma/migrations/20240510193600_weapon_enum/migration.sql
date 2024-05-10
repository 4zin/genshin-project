/*
  Warnings:

  - Added the required column `weapon` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Weapon" AS ENUM ('Sword', 'Claymore', 'Bow', 'Catalyst', 'Polearm');

-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "weapon" "Weapon" NOT NULL;
