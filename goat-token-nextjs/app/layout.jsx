import { Inter, Anton, Bebas_Neue } from 'next/font/google';
import './globals.css';

// ============================================================
// FONTS — di-load sekali, dipakai global via CSS variables
// ============================================================
const inter = Inter({
    subsets: ['latin'],
    weight:  ['400', '500', '600', '700', '800', '900'],
    variable:'--font-inter',
    display: 'swap',
});

const anton = Anton({
    subsets: ['latin'],
    weight:  '400',
    variable:'--font-anton',
    display: 'swap',
});

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight:  '400',
    variable:'--font-bebas',
    display: 'swap',
});

// ============================================================
// METADATA SEO — GANTI nilai di bawah ini sesuai proyek kamu
// ============================================================
export const metadata = {
    title:       'GOAT TOKEN ($GOAT) — The GOAT of Crypto | Solana Meme Coin',
    description: '$GOAT — The GOAT of Crypto. A football-inspired Solana meme token built for legends. Join the movement.',
    keywords:    ['GOAT', 'meme coin', 'Solana', 'crypto', 'football', 'SPL token'],
    openGraph: {
        title:       'GOAT TOKEN ($GOAT) — The GOAT of Crypto',
        description: 'The last dance of meme coins. Solana-powered. Community-fueled.',
        url:         'https://your-domain.com',
        siteName:    'GOAT TOKEN',
        images: [
            {
                url:    'https://placehold.co/1200x630/0a0a0a/facc15?text=%24GOAT',
                width:  1200,
                height: 630,
            },
        ],
        type: 'website',
    },
    twitter: {
        card:        'summary_large_image',
        title:       'GOAT TOKEN ($GOAT)',
        description: 'The last dance of meme coins on Solana.',
    },
    icons: {
        // Favicon inline SVG (emoji bola)
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%E2%9A%BD%3C/text%3E%3C/svg%3E",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="id" className={`${inter.variable} ${anton.variable} ${bebas.variable}`}>
            <body className="bg-night text-white font-body antialiased">
                {children}
            </body>
        </html>
    );
}
