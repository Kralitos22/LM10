import { Inter, Anton, Bebas_Neue } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    weight:  ['400', '500', '600', '700', '800', '900'],
    variable: '--font-inter',
    display: 'swap',
});

const anton = Anton({
    subsets: ['latin'],
    weight:  '400',
    variable: '--font-anton',
    display: 'swap',
});

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight:  '400',
    variable: '--font-bebas',
    display: 'swap',
});

export const metadata = {
    metadataBase: 'https://lm10.life',
    title:       'LM10 GOAT TOKEN ($GOAT) — The GOAT of Crypto | Solana Meme Coin',
    description: '$GOAT — Messi\'s Legacy on Solana. A football-inspired meme token built for legends. Join the movement.',
    keywords:    ['GOAT', 'LM10', 'meme coin', 'Solana', 'crypto', 'football', 'Messi', 'SPL token'],
    openGraph: {
        title:       'LM10 GOAT TOKEN ($GOAT)',
        description: 'The GOAT of crypto — Messi\'s legacy on Solana. The last dance of meme coins.',
        url:         'https://lm10.life',
        siteName:    'LM10 GOAT TOKEN',
        images: [
            {
                url:    'https://lm10.life/lm10-logo.jpg',
                width:  1200,
                height: 630,
                alt:    'LM10 GOAT Token',
            },
        ],
        type: 'website',
    },
    twitter: {
        card:        'summary_large_image',
        title:       'LM10 GOAT TOKEN ($GOAT)',
        description: 'Messi\'s legacy on Solana — The GOAT of crypto.',
        images:      ['https://lm10.life/lm10-logo.jpg'],
    },
    icons: {
        icon: '/lm10-circle-nav.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${anton.variable} ${bebas.variable}`}>
            <body className="bg-night text-white font-body antialiased">
                {children}
            </body>
        </html>
    );
}