/*
  Warnings:

  - Added the required column `txHash` to the `Badge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `txHash` to the `Entity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `txHash` to the `PermissionToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Badge" ADD COLUMN     "txHash" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Entity" ADD COLUMN     "txHash" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PermissionToken" ADD COLUMN     "txHash" TEXT NOT NULL;
