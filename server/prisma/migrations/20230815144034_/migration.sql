-- CreateTable
CREATE TABLE "Room" (
    "board" JSONB NOT NULL,
    "turn" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("board")
);
