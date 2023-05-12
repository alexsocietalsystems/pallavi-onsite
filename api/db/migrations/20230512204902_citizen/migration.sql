/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_citation_id_fkey";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Citizen" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "citation_id" INTEGER NOT NULL,
    "notifications" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Citizen_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Citizen" ADD CONSTRAINT "Citizen_citation_id_fkey" FOREIGN KEY ("citation_id") REFERENCES "Citation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
