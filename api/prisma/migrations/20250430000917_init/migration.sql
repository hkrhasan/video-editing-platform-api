-- CreateEnum
CREATE TYPE "Status" AS ENUM ('uploaded', 'editing');

-- CreateTable
CREATE TABLE "video" (
    "id" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "duration" DOUBLE PRECISION,
    "status" "Status" NOT NULL DEFAULT 'uploaded',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isRendered" BOOLEAN NOT NULL DEFAULT false,
    "original_id" TEXT,

    CONSTRAINT "video_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "video_original_id_key" ON "video"("original_id");

-- AddForeignKey
ALTER TABLE "video" ADD CONSTRAINT "video_original_id_fkey" FOREIGN KEY ("original_id") REFERENCES "video"("id") ON DELETE SET NULL ON UPDATE CASCADE;
