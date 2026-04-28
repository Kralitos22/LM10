import ScrollReveal from './ScrollReveal';
import { TOKEN } from '@/lib/config';

/* ============================================================
   ABOUT / THE VISION — MESSI EDITION
============================================================ */

export default function About() {
    return (
        <section id="about" className="py-24 px-5 section-gradient relative overflow-hidden">
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            <div className="max-w-5xl mx-auto">
                {/* Section label */}
                <ScrollReveal className="text-center mb-6">
                    <span className="messi-badge">
                        <span>⚽</span> THE MOVEMENT
                    </span>
                </ScrollReveal>

                {/* Headline */}
                <ScrollReveal as="h2" className="font-display text-5xl md:text-7xl gradient-gold text-center mb-8 headline-shadow">
                    ABOUT {TOKEN.ticker}
                </ScrollReveal>

                {/* Messi bio card */}
                <ScrollReveal className="grid md:grid-cols-2 gap-10 items-center mb-12">
                    <div className="relative">
                        {/* Messi's Argentina image placeholder — circular */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                            <div className="absolute inset-0 rounded-full border-4 border-gold/30 shadow-[0_0_60px_rgba(250,204,21,0.2)]" />
                            <img
                                src="lm10-circle-nav.png"
                                alt="LM10 Logo"
                                className="w-full h-full object-cover rounded-full"
                            />
                            {/* Argentine blue band overlay */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-gold rounded-full px-4 py-2 border-glow">
                                <span className="text-sm font-bold text-gold tracking-wider">LM10 · THE GOAT</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-display text-3xl md:text-4xl gradient-gold mb-5">
                            The Living Legend
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-5">
                            Lionel Messi — universally known as the GOAT. Eight-time Ballon d&apos;Or winner, four-time Champions League champion, and the man who brought the World Cup home to Argentina in 2022.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            <span className="text-gold font-bold">{TOKEN.ticker}</span> is a celebration of that legacy. Built on Solana for speed, built by the community for passion. No VCs. No team allocation. Just pure love for the beautiful game and the legend who defined it.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {['8× Ballon d\'Or', '1× World Cup', '4× UCL', '43× Trophy Winner'].map(tag => (
                                <span key={tag} className="glass rounded-full px-4 py-1.5 text-xs text-gray-300 font-semibold">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Three pillar cards */}
                <div className="grid md:grid-cols-3 gap-5">
                    {[
                        {
                            icon: '⚡',
                            title: 'Lightning Fast',
                            desc: 'Built on Solana — sub-second finality, fractions of a cent in fees. No waiting, no drama.',
                        },
                        {
                            icon: '🤝',
                            title: 'Community First',
                            desc: '100% of tokens in LP, burned forever. No VCs, no team bags. You own it, you control it.',
                        },
                        {
                            icon: '🏆',
                            title: 'The Last Dance',
                            desc: 'Inspired by Messi\'s final chapter. World Cup 2026 is the next chapter of the greatest story ever told.',
                        },
                    ].map(pillar => (
                        <ScrollReveal key={pillar.title} className="card-glow rounded-2xl p-7 text-center">
                            <div className="text-5xl mb-4">{pillar.icon}</div>
                            <h4 className="font-display text-2xl gradient-gold mb-3">{pillar.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </section>
    );
}