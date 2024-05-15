-- CreateTable
CREATE TABLE "Factions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Factions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CharacterToFactions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToFactions_AB_unique" ON "_CharacterToFactions"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToFactions_B_index" ON "_CharacterToFactions"("B");

-- AddForeignKey
ALTER TABLE "_CharacterToFactions" ADD CONSTRAINT "_CharacterToFactions_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToFactions" ADD CONSTRAINT "_CharacterToFactions_B_fkey" FOREIGN KEY ("B") REFERENCES "Factions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
