-- CreateEnum
CREATE TYPE "Chain" AS ENUM ('OPTIMISM', 'ETHEREUM', 'RINKEBY');

-- CreateEnum
CREATE TYPE "PermissionTokenType" AS ENUM ('ADMIN', 'SUPER_USER', 'GENESIS');

-- CreateTable
CREATE TABLE "Entity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "entityAddress" TEXT NOT NULL,
    "permissionTokenAddress" TEXT NOT NULL,
    "badgeTokenAddress" TEXT NOT NULL,
    "chain" "Chain" NOT NULL,
    "txHash" TEXT NOT NULL,
    "dateOfLastVerified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PermissionToken" (
    "id" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "collectionId" INTEGER NOT NULL,
    "adminAddress" TEXT NOT NULL,
    "tokenType" "PermissionTokenType" NOT NULL,
    "txHash" TEXT NOT NULL,
    "jsonUrl" TEXT NOT NULL,
    "dateOfLastVerified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PermissionToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Badge" (
    "id" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "shortHash" TEXT NOT NULL,
    "jsonUrl" TEXT NOT NULL,
    "collectionId" INTEGER NOT NULL,
    "recipientAddress" TEXT NOT NULL,
    "recipientEns" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "animationUrl" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "bxp" DOUBLE PRECISION NOT NULL,
    "txHash" TEXT NOT NULL,
    "dateOfLastVerified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "handle" TEXT,
    "name" TEXT,
    "emails" TEXT[],
    "indexOfPreferredEmail" INTEGER NOT NULL DEFAULT -1,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Badge_shortHash_key" ON "Badge"("shortHash");

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");

-- CreateIndex
CREATE UNIQUE INDEX "User_handle_key" ON "User"("handle");

-- AddForeignKey
ALTER TABLE "PermissionToken" ADD CONSTRAINT "PermissionToken_adminAddress_fkey" FOREIGN KEY ("adminAddress") REFERENCES "User"("address") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissionToken" ADD CONSTRAINT "PermissionToken_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Badge" ADD CONSTRAINT "Badge_recipientAddress_fkey" FOREIGN KEY ("recipientAddress") REFERENCES "User"("address") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Badge" ADD CONSTRAINT "Badge_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
