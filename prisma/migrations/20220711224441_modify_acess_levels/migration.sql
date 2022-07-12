/*
  Warnings:

  - The values [owner,member] on the enum `AccessLevel` will be removed. If these variants are still used in the database, this will fail.
  - The values [owner,member] on the enum `VisibilityLevel` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AccessLevel_new" AS ENUM ('admin', 'public');
ALTER TABLE "group_permission" ALTER COLUMN "permission" DROP DEFAULT;
ALTER TABLE "group_permission" ALTER COLUMN "permission" TYPE "AccessLevel_new" USING ("permission"::text::"AccessLevel_new");
ALTER TYPE "AccessLevel" RENAME TO "AccessLevel_old";
ALTER TYPE "AccessLevel_new" RENAME TO "AccessLevel";
DROP TYPE "AccessLevel_old";
ALTER TABLE "group_permission" ALTER COLUMN "permission" SET DEFAULT 'public';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "VisibilityLevel_new" AS ENUM ('admin', 'private', 'public');
ALTER TABLE "item" ALTER COLUMN "permission_level" DROP DEFAULT;
ALTER TABLE "item" ALTER COLUMN "permission_level" TYPE "VisibilityLevel_new" USING ("permission_level"::text::"VisibilityLevel_new");
ALTER TYPE "VisibilityLevel" RENAME TO "VisibilityLevel_old";
ALTER TYPE "VisibilityLevel_new" RENAME TO "VisibilityLevel";
DROP TYPE "VisibilityLevel_old";
ALTER TABLE "item" ALTER COLUMN "permission_level" SET DEFAULT 'public';
COMMIT;

-- AlterTable
ALTER TABLE "group_permission" ALTER COLUMN "permission" SET DEFAULT 'public';

-- AlterTable
ALTER TABLE "item" ALTER COLUMN "permission_level" SET DEFAULT 'public';
