import ScrollReveal from './ScrollReveal';
import { TOKEN } from '@/lib/config';

/* ============================================================
   THE PRESS
   ------------------------------------------------------------
   Placeholder logo media + quote palsu. Ganti dengan media
   asli kalau sudah dapat coverage.
============================================================ */

const MEDIA = ['CRYPTO TIMES', 'MEME DAILY', 'DEGEN POST', 'SOL INSIDER'];

const QUOTES = [
    {
        text:   `The most hyped Solana meme launch of the quarter. ${TOKEN.ticker} is capturing the culture like nothing else.`,
        source: 'CRYPTO TIMES',
    },
    {
        text:   "Football meets Web3 in the cleanest tokenomics we've seen all year. This is the one to watch.",
        source: 'DEGEN POST',
    },
];

export default function Press() {
    return (
        <section id="press" className="py-24 px-5">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal className="text-center mb-14">
                    <p className="text-gold font-bold tracking-[0.4em] text-sm mb-3">HEADLINES</p>
                    <h2 className="font-display text-5xl md:text-7xl gradient-gold headline-shadow">
                        THE PRESS
                    </h2>
                </ScrollReveal>

                {/* Logo row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
                    {MEDIA.map(name => (
                        <ScrollReveal
                            key={name}
                            className="card-glow rounded-xl py-8 text-center font-display text-2xl text-gray-400"
                        >
                            {name}
                        </ScrollReveal>
                    ))}
                </div>

                {/* Quotes */}
                <div className="grid md:grid-cols-2 gap-6">
                    {QUOTES.map(q => (
                        <ScrollReveal key={q.source} className="card-glow rounded-2xl p-7">
                            <div className="text-4xl text-gold mb-3">❝</div>
                            <p className="text-gray-300 italic leading-relaxed">{q.text}</p>
                            <p className="mt-4 text-sm text-gold font-bold">— {q.source}</p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
