/*
  Warnings:

  - You are about to drop the column `Complement` on the `Address` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Address" RENAME COLUMN "Complement"
TO "complement" ;
