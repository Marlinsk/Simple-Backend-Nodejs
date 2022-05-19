-- CreateTable
CREATE TABLE "Users_Accounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "completename" TEXT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_Accounts_username_key" ON "Users_Accounts"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_Accounts_email_key" ON "Users_Accounts"("email");
