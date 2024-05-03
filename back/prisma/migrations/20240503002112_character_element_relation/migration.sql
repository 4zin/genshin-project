/*
  Warnings:

  - A unique constraint covering the columns `[elementId]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `elementId` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "elementId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Character_elementId_key" ON "Character"("elementId");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Elements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
