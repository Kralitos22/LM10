import ScrollReveal from './ScrollReveal';
import { TOKEN } from '@/lib/config';

/* ============================================================
   THE PRESS — MESSI EDITION
============================================================ */

const MEDIA = [
    { name: 'CRYPTO TIMES',   logo: '📰' },
    { name: 'MEME DAILY',     logo: '📱' },
    { name: 'DEGEN POST',     logo: '🐸' },
    { name: 'SOL INSIDER',    logo: '☀️' },
    { name: 'FOOTY CRYPTO',   logo: '⚽' },
    { name: 'MOON SHOTS',     logo: '🚀' },
];

const QUOTES = [
    {
        text:   `"The most hyped Solana meme launch of the quarter. ${TOKEN.ticker} is capturing the culture like nothing else — Messi mania meets crypto.`,
        source: 'CRYPTO TIMES',
        stars: 5,
    },
    {
        text:   "Football meets Web3 in the cleanest tokenomics we've seen all year. This is the one to watch. The Messi effect is real.",
        source: 'DEGEN POST',
        stars: 5,
    },
    {
        text:   `Community is everything. ${TOKEN.ticker} holders aren't just investors — they're part of the greatest sports-inspired movement in crypto history.`,
        source: 'SOL INSIDER',
        stars: 4,
    },
];

export default function Press() {
    return (
        <section id="press" className="py-24 px-5 section-dark relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            <div className="max-w-6xl mx-auto">
                <ScrollReveal className="text-center mb-16">
                    <p className="text-gold font-bold tracking-[0.5em] text-sm mb-4">HEADLINES</p>
                    <h2 className="font-display text-5xl md:text-8xl gradient-gold mb-5 headline-shadow">
                        THE PRESS
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        What the world is saying about the Messi coin revolution.
                    </p>
                </ScrollReveal>

                {/* Logo grid */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-16">
                    {MEDIA.map(m => (
                        <ScrollReveal key={m.name} className="card-glow rounded-2xl py-8 text-center glass">
                            <div className="text-3xl mb-2">{m.logo}</div>
                            <p className="font-display text-sm text-gray-400 tracking-wider">{m.name}</p>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Quote cards */}
                <div className="grid md:grid-cols-3 gap-5">
                    {QUOTES.map(q => (
                        <ScrollReveal key={q.source} className="testimonial-card">
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className={i < q.stars ? 'text-gold' : 'text-gray-600'}>★</span>
                                ))}
                            </div>
                            <div className="text-3xl text-gold/40 mb-3 font-serif">❝</div>
                            <p className="text-gray-300 italic leading-relaxed text-sm mb-5">{q.text}</p>
                            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-sm">📰</div>
                                <p className="text-xs text-gold font-bold tracking-wider uppercase">{q.source}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Feature badge */}
                <ScrollReveal className="mt-12 text-center">
                    <div className="inline-flex items-center gap-4 glass-gold rounded-full px-8 py-4 border-glow">
                        <span className="text-3xl">🏆</span>
                        <div className="text-left">
                            <p className="text-gold font-bold text-sm tracking-wider uppercase">Trending on DexScreener</p>
                            <p className="text-gray-400 text-xs">Top Solana meme by social volume</p>
                        </div>
                        <span className="w-3 h-3 bg-football-green rounded-full live-dot" />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}