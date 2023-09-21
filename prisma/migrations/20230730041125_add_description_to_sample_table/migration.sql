/*
  Warnings:

  - Added the required column `description` to the `sample` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sample` ADD COLUMN `description` VARCHAR(35) NOT NULL;
