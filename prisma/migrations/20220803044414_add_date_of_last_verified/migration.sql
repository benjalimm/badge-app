/*
  Warnings:

  - Added the required column `jsonUrl` to the `PermissionToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Badge" ADD COLUMN     "dateOfLastVerified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Entity" ADD COLUMN     "dateOfLastVerified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "PermissionToken" ADD COLUMN     "dateOfLastVerified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "jsonUrl" TEXT NOT NULL;
