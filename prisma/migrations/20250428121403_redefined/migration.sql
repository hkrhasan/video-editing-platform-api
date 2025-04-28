/*
  Warnings:

  - The `status` column on the `edit_task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `video` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('uploaded', 'pending');

-- AlterTable
ALTER TABLE "edit_task" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE "video" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'uploaded';
