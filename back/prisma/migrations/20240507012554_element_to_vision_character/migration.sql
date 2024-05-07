/*
  Warnings:

  - You are about to drop the column `elementId` on the `Character` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[visionId]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `visionId` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_elementId_fkey";

-- DropIndex
DROP INDEX "Character_elementId_key";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "elementId",
ADD COLUMN     "visionId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Character_visionId_key" ON "Character"("visionId");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_visionId_fkey" FOREIGN KEY ("visionId") REFERENCES "Elements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
