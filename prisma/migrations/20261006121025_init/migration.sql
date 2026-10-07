-- CreateTable
CREATE TABLE "Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "source_link" TEXT NOT NULL,
    "output_link" TEXT NOT NULL,
    "clicks" INTEGER DEFAULT 0
);
