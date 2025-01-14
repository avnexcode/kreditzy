import { TransactionStatus } from '@prisma/client';

export const convertTransactionStatus = (status: TransactionStatus): string => {
    switch (status) {
        case 'ACTIVE':
            return 'berlangsung';
        case 'PAID':
            return 'lunas';
        case 'CANCELED':
            return 'dibatalkan';
        case 'OVERDUE':
            return 'terlambat';
        default:
            return '';
    }
};
