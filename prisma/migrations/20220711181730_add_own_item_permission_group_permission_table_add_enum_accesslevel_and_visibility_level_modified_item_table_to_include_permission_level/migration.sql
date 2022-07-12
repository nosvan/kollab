/*
  Warnings:

  - You are about to drop the `permission` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `category_id` on table `item` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "AccessLevel" AS ENUM ('owner', 'admin', 'member');

-- CreateEnum
CREATE TYPE "VisibilityLevel" AS ENUM ('owner', 'admin', 'private', 'member');

-- AlterTable
ALTER TABLE "item" ADD COLUMN     "permission_level" "VisibilityLevel" NOT NULL DEFAULT 'member',
ALTER COLUMN "category_id" SET NOT NULL;

-- DropTable
DROP TABLE "permission";

-- CreateTable
CREATE TABLE "group_permission" (
    "id" SERIAL NOT NULL,
    "group_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "permission" "AccessLevel" NOT NULL DEFAULT 'member',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "group_permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "own" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "owner_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "own_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_permission" (
    "id" SERIAL NOT NULL,
    "item_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "item_permission_pkey" PRIMARY KEY ("id")
);
