import { type LoanReference } from '@prisma/client';

const safeParseNumber = (value: number | string): number => {
    if (typeof value === 'number' && !isNaN(value)) {
        return value;
    }

    if (typeof value === 'string') {
        const cleanedValue = value.trim().replace(/,/g, '');

        if (cleanedValue === '') {
            return 0;
        }

        const parsedValue = Number(cleanedValue);

        if (!isNaN(parsedValue)) {
            return parsedValue;
        }
    }

    return 0;
};

export const getMonthlySurplus = (
    monthly_income: number | string,
    monthly_expenses: number | string,
): string => {
    return String(
        safeParseNumber(monthly_income) - safeParseNumber(monthly_expenses),
    );
};

export const getInstallment = (
    requested_loan_amount: number | string,
    loan_term: number | string,
    interest_rate: number,
): string => {
    const baseInstallment =
        safeParseNumber(requested_loan_amount) / safeParseNumber(loan_term);
    const interestAmount =
        safeParseNumber(requested_loan_amount) * (interest_rate / 100);
    return String(Math.ceil((baseInstallment + interestAmount) / 100) * 100);
};

// export const getCreditWorthiness = (
//     monthly_surplus: number | string,
//     installment: number | string,
// ): boolean => {
//     return safeParseNumber(monthly_surplus) > safeParseNumber(installment);
// };

export const getCreditWorthiness = (loanData: LoanReference): boolean => {
    const monthlyIncome = safeParseNumber(loanData.monthly_income);
    const monthlyInstallment = safeParseNumber(loanData.installment);
    const loanAmount = safeParseNumber(loanData.requested_loan_amount);
    const collateral = safeParseNumber(loanData.collateral_estimate);
    const surplus = safeParseNumber(loanData.monthly_surplus);

    if (surplus <= 0) {
        return false;
    }

    if (!loanData.employment_status && collateral < loanAmount) {
        return false;
    }

    if (!loanData.previous_credit_history && collateral < loanAmount) {
        return false;
    }

    if (monthlyInstallment > monthlyIncome * 0.3) {
        return false;
    }

    return true;
};
