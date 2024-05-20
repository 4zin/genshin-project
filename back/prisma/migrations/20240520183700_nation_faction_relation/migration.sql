/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Factions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nationId` to the `Factions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Factions" ADD COLUMN     "nationId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Factions_name_key" ON "Factions"("name");

-- AddForeignKey
ALTER TABLE "Factions" ADD CONSTRAINT "Factions_nationId_fkey" FOREIGN KEY ("nationId") REFERENCES "Nation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
