/*
  Warnings:

  - The primary key for the `Room` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `roomId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" DROP CONSTRAINT "Room_pkey",
ADD COLUMN     "roomId" TEXT NOT NULL,
ADD CONSTRAINT "Room_pkey" PRIMARY KEY ("roomId");
