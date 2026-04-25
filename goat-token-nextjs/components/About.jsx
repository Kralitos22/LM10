import ScrollReveal from './ScrollReveal';
import { TOKEN } from '@/lib/config';

/* ============================================================
   ABOUT / VISION
============================================================ */

export default function About() {
    return (
        <section id="about" className="py-24 px-5">
            <ScrollReveal className="max-w-4xl mx-auto text-center">
                <p className="text-gold font-bold tracking-[0.4em] text-sm mb-3">THE VISION</p>
                <h2 className="font-display text-5xl md:text-7xl gradient-gold mb-8 headline-shadow">
                    ABOUT {TOKEN.ticker}
                </h2>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
                    {TOKEN.ticker} is more than a meme coin — it&apos;s a movement of legends. Built on Solana for lightning-fast transactions and meme-worthy fees, powered by a community that believes the greatest plays are still ahead.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Whether you&apos;re here for the hype, the culture, or the long game — welcome to the squad. We ball together, we moon together.
                </p>
            </ScrollReveal>
        </section>
    );
}
