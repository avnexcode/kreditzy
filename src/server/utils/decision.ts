export const getMonthlySurplus = (
    monthly_income: number,
    monthly_expenses: number,
): number => monthly_income - monthly_expenses;

export const getInstallment = (
    requested_loan_amount: number,
    loan_term: number,
    interest_rate: number,
): number => {
    const baseInstallment = requested_loan_amount / loan_term;
    const interestAmount = requested_loan_amount * (interest_rate / 100);
    return Math.ceil((baseInstallment + interestAmount) / 100) * 100;
};
