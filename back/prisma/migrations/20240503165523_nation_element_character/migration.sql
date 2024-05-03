/*
  Warnings:

  - A unique constraint covering the columns `[nationId]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nationId` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "nationId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Nation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "elementId" TEXT NOT NULL,

    CONSTRAINT "Nation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Nation_elementId_key" ON "Nation"("elementId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_nationId_key" ON "Character"("nationId");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_nationId_fkey" FOREIGN KEY ("nationId") REFERENCES "Nation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nation" ADD CONSTRAINT "Nation_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Elements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
