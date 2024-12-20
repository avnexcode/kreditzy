import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
    darkMode: ['class'],
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            container: {
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1400px',
                    '2xl': '1736px',
                },
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                },
            },
            components: {
                title: {
                    DEFAULT:
                        'font-bold leading-tight tracking-tight text-red-900 antialiased',
                },
            },
            fontFamily: {
                poppins: ['var(--font-poppins)', ...fontFamily.sans],
                sans: ['var(--font-geist-sans)', ...fontFamily.sans],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {},
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;
