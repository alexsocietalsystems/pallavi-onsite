-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "messageTemplate" TEXT NOT NULL,
    "timeUnit" TEXT NOT NULL,
    "countBefore" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Citation" (
    "id" SERIAL NOT NULL,
    "court_id" INTEGER NOT NULL,
    "citation_number" TEXT NOT NULL,
    "driver_name" TEXT NOT NULL,
    "docket_time" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Citation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Court" (
    "id" SERIAL NOT NULL,
    "street_address" TEXT NOT NULL,
    "court_name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Court_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Citation" ADD CONSTRAINT "Citation_court_id_fkey" FOREIGN KEY ("court_id") REFERENCES "Court"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
