-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('FiveStar', 'FourStar', 'ThreeStar');

-- CreateTable
CREATE TABLE "Weapons" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rarity" "Rarity" NOT NULL,
    "type" "Weapon" NOT NULL,

    CONSTRAINT "Weapons_pkey" PRIMARY KEY ("id")
);
