export const parseValue = {
    safeParseNumber: (value: number | string): number => {
        if (typeof value === 'number' && !isNaN(value)) {
            return value;
        }

        if (typeof value === 'string') {
            const cleanedValue = value.trim().replace(/,/g, '');

            if (cleanedValue === '') return 0;

            const parsedValue = Number(cleanedValue);

            if (!isNaN(parsedValue)) return parsedValue;
        }

        return 0;
    },
};
