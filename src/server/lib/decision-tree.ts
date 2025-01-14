import { type LoanReference } from '@prisma/client';
import { parseValue } from '../utils/parse-value';

export const getMonthlySurplus = (
    monthly_income: number | string,
    monthly_expenses: number | string,
): string => {
    return String(
        parseValue.safeParseNumber(monthly_income) -
            parseValue.safeParseNumber(monthly_expenses),
    );
};

export const getInstallment = (
    requested_loan_amount: number | string,
    loan_term: number | string,
    interest_rate: number,
): string => {
    const baseInstallment =
        parseValue.safeParseNumber(requested_loan_amount) /
        parseValue.safeParseNumber(loan_term);

    const interestAmount =
        parseValue.safeParseNumber(requested_loan_amount) *
        (interest_rate / 100);

    return String(Math.ceil((baseInstallment + interestAmount) / 100) * 100);
};

export const getCreditWorthiness = (loanData: LoanReference): boolean => {
    const loanAmount = parseValue.safeParseNumber(
        loanData.requested_loan_amount,
    );
    const collateral = parseValue.safeParseNumber(loanData.collateral_estimate);
    const monthlySurplus = parseValue.safeParseNumber(loanData.monthly_surplus);
    const monthlyInstallment = parseValue.safeParseNumber(loanData.installment);

    if (monthlySurplus <= 0) return false;

    if (monthlyInstallment > monthlySurplus) return false;

    if (loanAmount > collateral) {
        if (!loanData.previous_credit_history) return false;
        if (!loanData.employment_status) return false;
    }

    return true;
};
