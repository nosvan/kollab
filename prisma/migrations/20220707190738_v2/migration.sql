-- AlterTable
ALTER TABLE "classroom" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "group" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "item" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "category_id" DROP NOT NULL;
