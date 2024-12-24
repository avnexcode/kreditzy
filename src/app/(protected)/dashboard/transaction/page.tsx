import { type Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Dashboard - Transaction',
};
export { TransactionPage as default } from '~/features/transaction/pages/transaction-page';
