/*
  Warnings:

  - Added the required column `chain` to the `Badge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collectionAddress` to the `Badge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Badge" ADD COLUMN     "chain" "Chain" NOT NULL,
ADD COLUMN     "collectionAddress" TEXT NOT NULL;
