-- CreateTable
CREATE TABLE "Citation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "court_id" INTEGER NOT NULL,
    "citation_number" TEXT NOT NULL,
    "driver_name" TEXT NOT NULL,
    "docket_time" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Citation_court_id_fkey" FOREIGN KEY ("court_id") REFERENCES "Court" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Court" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street_address" TEXT NOT NULL,
    "court_name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
