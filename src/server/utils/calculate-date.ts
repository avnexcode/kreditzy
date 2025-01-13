export const calculateDate = {
    endDate: (startDate: Date, loanTerm: number): Date => {
        const endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + loanTerm);
        const expectedDay = startDate.getDate();
        if (endDate.getDate() !== expectedDay) {
            endDate.setDate(0);
        }

        return endDate;
    },
};
