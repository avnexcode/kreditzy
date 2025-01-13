-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'LATE', 'DEFAULT');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(150),
    "access_token" VARCHAR(255),
    "image" TEXT,
    "phone" VARCHAR(20),
    "provider" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "national_id" VARCHAR(20) NOT NULL,
    "id_card_address" VARCHAR(100) NOT NULL,
    "residential_address" VARCHAR(100) NOT NULL,
    "occupation" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "guarantors" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "national_id" VARCHAR(20) NOT NULL,
    "id_card_address" VARCHAR(100) NOT NULL,
    "residential_address" VARCHAR(100) NOT NULL,
    "occupation" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "relationship" VARCHAR(100) NOT NULL,
    "customer_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "guarantors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "loan_references" (
    "id" TEXT NOT NULL,
    "monthly_income" VARCHAR(100) NOT NULL,
    "monthly_expenses" VARCHAR(100) NOT NULL,
    "monthly_surplus" VARCHAR(100) NOT NULL,
    "employment_status" BOOLEAN NOT NULL,
    "previous_credit_history" BOOLEAN NOT NULL,
    "requested_loan_amount" VARCHAR(100) NOT NULL,
    "collateral_estimate" VARCHAR(100) NOT NULL,
    "loan_term" INTEGER NOT NULL,
    "installment" VARCHAR(100) NOT NULL,
    "customer_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "loan_references_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credit_worthinesses" (
    "id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "customer_id" TEXT NOT NULL,
    "loan_reference_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "credit_worthinesses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "installment" VARCHAR(100) NOT NULL,
    "loan_term" INTEGER NOT NULL,
    "loan_amount" VARCHAR(100) NOT NULL,
    "customer_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_records" (
    "id" TEXT NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "due_date" TIMESTAMP(3) NOT NULL,
    "amount_paid" VARCHAR(100) NOT NULL,
    "payment_status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "payment_month" INTEGER NOT NULL,
    "transaction_id" TEXT NOT NULL,
    "payment_method" VARCHAR(50),
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payment_records_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customers_national_id_key" ON "customers"("national_id");

-- CreateIndex
CREATE UNIQUE INDEX "guarantors_national_id_key" ON "guarantors"("national_id");

-- CreateIndex
CREATE UNIQUE INDEX "loan_references_customer_id_key" ON "loan_references"("customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "credit_worthinesses_customer_id_key" ON "credit_worthinesses"("customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "credit_worthinesses_loan_reference_id_key" ON "credit_worthinesses"("loan_reference_id");

-- CreateIndex
CREATE UNIQUE INDEX "transactions_customer_id_key" ON "transactions"("customer_id");

-- AddForeignKey
ALTER TABLE "guarantors" ADD CONSTRAINT "guarantors_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loan_references" ADD CONSTRAINT "loan_references_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credit_worthinesses" ADD CONSTRAINT "credit_worthinesses_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credit_worthinesses" ADD CONSTRAINT "credit_worthinesses_loan_reference_id_fkey" FOREIGN KEY ("loan_reference_id") REFERENCES "loan_references"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_records" ADD CONSTRAINT "payment_records_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transactions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
