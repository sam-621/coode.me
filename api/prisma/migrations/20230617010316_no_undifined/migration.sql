/*
  Warnings:

  - Made the column `repo` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `repo` on table `Snippet` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "repo" SET NOT NULL;

-- AlterTable
ALTER TABLE "Snippet" ALTER COLUMN "repo" SET NOT NULL;
