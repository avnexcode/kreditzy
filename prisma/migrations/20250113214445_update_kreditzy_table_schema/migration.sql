/*
  Warnings:

  - The values [LATE,DEFAULT] on the enum `PaymentStatus` will be removed. If these variants are still used in the database, this will fail.
  - The `payment_method` column on the `payment_records` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `installment` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `payment_category` to the `payment_records` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_transaction` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `interest_amount` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `interest_installment` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loan_installment` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_amount` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_installment` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('ACTIVE', 'PAID', 'CANCELED', 'OVERDUE');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH');

-- CreateEnum
CREATE TYPE "PaymentCategory" AS ENUM ('LOAN', 'INTEREST', 'TOTAL');

-- AlterEnum
BEGIN;
CREATE TYPE "PaymentStatus_new" AS ENUM ('PENDING', 'PAID');
ALTER TABLE "payment_records" ALTER COLUMN "payment_status" DROP DEFAULT;
ALTER TABLE "payment_records" ALTER COLUMN "payment_status" TYPE "PaymentStatus_new" USING ("payment_status"::text::"PaymentStatus_new");
ALTER TYPE "PaymentStatus" RENAME TO "PaymentStatus_old";
ALTER TYPE "PaymentStatus_new" RENAME TO "PaymentStatus";
DROP TYPE "PaymentStatus_old";
ALTER TABLE "payment_records" ALTER COLUMN "payment_status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "payment_records" ADD COLUMN     "payment_category" "PaymentCategory" NOT NULL,
ALTER COLUMN "payment_date" DROP NOT NULL,
ALTER COLUMN "payment_date" DROP DEFAULT,
DROP COLUMN "payment_method",
ADD COLUMN     "payment_method" "PaymentMethod" NOT NULL DEFAULT 'CASH';

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "installment",
ADD COLUMN     "end_transaction" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "interest_amount" VARCHAR(100) NOT NULL,
ADD COLUMN     "interest_installment" VARCHAR(100) NOT NULL,
ADD COLUMN     "loan_installment" VARCHAR(100) NOT NULL,
ADD COLUMN     "total_amount" VARCHAR(100) NOT NULL,
ADD COLUMN     "total_installment" VARCHAR(100) NOT NULL,
ADD COLUMN     "transaction_status" "TransactionStatus" NOT NULL DEFAULT 'ACTIVE';

-- CreateTable
CREATE TABLE "loan_balances" (
    "id" TEXT NOT NULL,
    "remaining_loan_amount" VARCHAR(100) NOT NULL,
    "remaining_total_amount" VARCHAR(100) NOT NULL,
    "interest_due" VARCHAR(100) NOT NULL,
    "total_paid" VARCHAR(100) NOT NULL,
    "last_payment_date" TIMESTAMP(3),
    "next_due_date" TIMESTAMP(3) NOT NULL,
    "transaction_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "loan_balances_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "loan_balances_transaction_id_key" ON "loan_balances"("transaction_id");

-- AddForeignKey
ALTER TABLE "loan_balances" ADD CONSTRAINT "loan_balances_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transactions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
