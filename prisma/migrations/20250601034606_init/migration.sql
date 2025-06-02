/*
  Warnings:

  - Made the column `tanggalKembali` on table `Peminjaman` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Status" ADD VALUE 'PENDING_KEMBALI';
ALTER TYPE "Status" ADD VALUE 'SELESAI';

-- AlterTable
ALTER TABLE "Peminjaman" ALTER COLUMN "tanggalKembali" SET NOT NULL;
