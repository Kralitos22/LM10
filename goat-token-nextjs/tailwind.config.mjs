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
                    light:   '#fde047',
                    muted:   'rgba(250,204,21,0.6)',
                },
                football: {
                    red:   '#dc2626',
                    green: '#16a34a',
                    blue:  '#3b82f6',
                    lightBlue: '#93c5fd',
                },
                night: {
                    DEFAULT: '#050508',
                    soft:    '#0a0a12',
                    card:    '#0f0f18',
                    deep:    '#080810',
                },
                messi: {
                    navy:  '#003A94',
                    sky:   '#5BB1E8',
                    gold:  '#D4AF37',
                    white: '#FFFFFF',
                    black: '#000000',
                },
            },
            fontFamily: {
                display: ['var(--font-anton)', 'var(--font-bebas)', 'sans-serif'],
                body:    ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                'gold-radial':  'radial-gradient(circle, #facc15 0%, #b38600 100%)',
                'blue-radial':  'radial-gradient(circle, #3b82f6 0%, #003A94 100%)',
                'messi-stripes': 'repeating-linear-gradient(90deg, #003A94 0px, #003A94 12px, #5BB1E8 12px, #5BB1E8 24px)',
            },
            animation: {
                'float':       'float 4s ease-in-out infinite',
                'float-slow':  'floatSlow 6s ease-in-out infinite',
                'shimmer':     'shimmer 3s linear infinite',
                'aurora':      'aurora 6s ease infinite',
                'glow-pulse':  'glow-pulse 2.5s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
