/*
  Warnings:

  - Made the column `description` on table `List` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `content` to the `Pronoun` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Snippet` required. This step will fail if there are existing NULL values in that column.
  - Made the column `position` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `bio` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `link` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gh` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_pronounId_fkey";

-- AlterTable
ALTER TABLE "List" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Pronoun" ADD COLUMN     "content" CHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE "Snippet" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT '';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "position" SET NOT NULL,
ALTER COLUMN "position" SET DEFAULT '',
ALTER COLUMN "bio" SET NOT NULL,
ALTER COLUMN "bio" SET DEFAULT '',
ALTER COLUMN "link" SET NOT NULL,
ALTER COLUMN "link" SET DEFAULT '',
ALTER COLUMN "gh" SET NOT NULL,
ALTER COLUMN "gh" SET DEFAULT '',
ALTER COLUMN "location" SET NOT NULL,
ALTER COLUMN "location" SET DEFAULT '',
ALTER COLUMN "pronounId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_pronounId_fkey" FOREIGN KEY ("pronounId") REFERENCES "Pronoun"("id") ON DELETE SET NULL ON UPDATE CASCADE;
