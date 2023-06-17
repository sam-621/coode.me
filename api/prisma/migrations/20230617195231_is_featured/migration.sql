/*
  Warnings:

  - You are about to drop the column `featured` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "featured",
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false;
