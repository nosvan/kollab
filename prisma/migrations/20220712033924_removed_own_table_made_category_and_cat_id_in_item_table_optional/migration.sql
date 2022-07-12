/*
  Warnings:

  - The values [own] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `own` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('classroom', 'group');
ALTER TABLE "item" ALTER COLUMN "category" TYPE "Category_new" USING ("category"::text::"Category_new");
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
COMMIT;

-- AlterTable
ALTER TABLE "item" ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "category_id" DROP NOT NULL;

-- DropTable
DROP TABLE "own";
