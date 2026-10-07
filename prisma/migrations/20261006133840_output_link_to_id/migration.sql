/*
  Warnings:

  - You are about to drop the column `output_link` on the `Link` table. All the data in the column will be lost.
  - Added the required column `output_id` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "source_link" TEXT NOT NULL,
    "output_id" TEXT NOT NULL,
    "clicks" INTEGER DEFAULT 0
);
INSERT INTO "new_Link" ("clicks", "id", "source_link") SELECT "clicks", "id", "source_link" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
