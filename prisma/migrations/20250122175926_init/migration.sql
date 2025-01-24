/*
  Warnings:

  - You are about to alter the column `color` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- DropIndex
DROP INDEX `Task_color_key` ON `Task`;

-- AlterTable
ALTER TABLE `Task` ADD COLUMN `completed_status` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `color` ENUM('RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'PINK', 'BROWN') NOT NULL,
    ALTER COLUMN `updatedAt` DROP DEFAULT;
