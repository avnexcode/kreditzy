export const toFormatDate = (date: Date | string | number): string => {
    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
        throw new Error('Invalid date format');
    }

    return new Intl.DateTimeFormat('id-ID', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }).format(parsedDate);
};
