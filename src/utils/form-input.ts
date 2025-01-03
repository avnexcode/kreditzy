export const inputHandle = {
    onChange: {
        number: (e: React.ChangeEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement;
            const numericValue = target.value.replace(/\D/g, '');
            target.value = numericValue;
        },
    },
    onPaste: {
        number: (e: React.ClipboardEvent<HTMLInputElement>) => {
            e.preventDefault();
            const pastedData = e.clipboardData.getData('text');
            const numericValue = pastedData.replace(/\D/g, '');
            const target = e.target as HTMLInputElement;
            target.value = numericValue;
            e.target.dispatchEvent(new Event('change', { bubbles: true }));
        },
    },
};

export const inputParse = {
    stringToNumber: (value: string): number => {
        const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
        return numericValue;
    },

    stringAsNumber: (value: string): string => {
        const numericValue = value.replace(/\D/g, '');
        return numericValue;
    },
};
