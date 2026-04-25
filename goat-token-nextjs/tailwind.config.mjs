/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    DEFAULT: '#facc15',
                    bright:  '#fbbf24',
                    deep:    '#b38600',
                },
                football: {
                    red:   '#dc2626',
                    green: '#16a34a',
                },
                night: {
                    DEFAULT: '#0a0a0a',
                    soft:    '#111111',
                    card:    '#151515',
                },
            },
            fontFamily: {
                // Font di-load dari next/font/google di app/layout.jsx
                display: ['var(--font-anton)', 'var(--font-bebas)', 'sans-serif'],
                body:    ['var(--font-inter)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
