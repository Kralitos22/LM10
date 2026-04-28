import ScrollReveal from './ScrollReveal';
import { TOKEN } from '@/lib/config';

/* ============================================================
   LEGACY / BUILT FOR WEB3 — MESSI EDITION
============================================================ */

const ACHIEVEMENTS = [
    { icon: '🏆', label: 'Ballon d\'Or',  value: '8×' },
    { icon: '🌍', label: 'World Cup',     value: '1×' },
    { icon: '⭐', label: 'Champions Lg',  value: '4×' },
    { icon: '⚽', label: 'Goals',          value: '800+' },
    { icon: '🎯', label: 'Assists',        value: '300+' },
    { icon: '🏅', label: 'Trophies',      value: '43×' },
];

export default function Legacy() {
    return (
        <section id="legacy" className="py-24 px-5 section-darker relative overflow-hidden">
            {/* Background strip decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <ScrollReveal className="text-center mb-16">
                    <p className="text-gold font-bold tracking-[0.5em] text-sm mb-4">THE STORY</p>
                    <h2 className="font-display text-5xl md:text-7xl gradient-gold mb-5 headline-shadow">
                        BUILT FOR GLORY
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Just as Messi carved his name into football immortality, <span className="text-gold">{TOKEN.ticker}</span> carves its name into crypto history. The same spirit. The same hunger. The same relentless pursuit of greatness.
                    </p>
                </ScrollReveal>

                {/* Story + Stats */}
                <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                    {/* Left narrative */}
                    <ScrollReveal>
                        <div className="relative">
                            {/* Large background number */}
                            <div className="absolute -top-8 -left-4 font-display text-[120px] md:text-[180px] text-white/[0.02] leading-none select-none pointer-events-none">
                                LM10
                            </div>

                            {/* Messi photo */}
                            <div className="relative w-48 h-48 mx-auto md:mx-0 mb-6">
                                <div className="absolute inset-0 rounded-full border-4 border-gold/30 shadow-[0_0_60px_rgba(250,204,21,0.25)]" />
                                <img
                                    src="/lm10-circle-nav.png"
                                    alt="Lionel Messi"
                                    className="w-full h-full object-cover rounded-full"
                                />
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] font-bold px-4 py-1 rounded-full tracking-wider">
                                    LM10 · THE GOAT
                                </div>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                                From Rosario to the world stage — Messi&apos;s journey is the greatest underdog story ever told. And now it continues on-chain.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-6 relative z-10">
                                <span className="text-gold font-bold">{TOKEN.ticker}</span> carries that flame into Web3. Every holder is part of the legacy. Every trade writes the next chapter. No VCs, no gatekeepers — just pure community fueling the greatest comeback story in crypto.
                            </p>
                            <div className="inline-flex items-center gap-3 glass-gold rounded-full px-5 py-3 border-glow">
                                <span className="text-2xl">🏆</span>
                                <div>
                                    <p className="text-gold font-bold text-sm">Champions Hall</p>
                                    <p className="text-gray-400 text-xs">Early holders earn eternal status</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right: achievement grid */}
                    <ScrollReveal className="grid grid-cols-3 gap-4">
                        {ACHIEVEMENTS.map(item => (
                            <div key={item.label} className="card-glow rounded-2xl p-5 text-center glass">
                                <div className="text-3xl mb-2">{item.icon}</div>
                                <div className="font-display text-2xl md:text-3xl gradient-gold">{item.value}</div>
                                <div className="text-[11px] text-gray-500 tracking-wider mt-2 uppercase">{item.label}</div>
                            </div>
                        ))}
                    </ScrollReveal>
                </div>

                {/* Timeline strip */}
                <ScrollReveal className="mt-6">
                    <div className="flex overflow-x-auto gap-0 pb-4 scrollbar-hide">
                        {[
                            { year: '2004', event: 'Barcelona Debut' },
                            { year: '2009', event: 'First Ballon d\'Or' },
                            { year: '2012', event: '91 Goals Record' },
                            { year: '2021', event: '7th Ballon d\'Or' },
                            { year: '2022', event: 'World Cup Glory' },
                            { year: '2023', event: '8th Ballon d\'Or' },
                            { year: '2024', event: 'Inter Miami' },
                            { year: '2026', event: 'World Cup 2026' },
                        ].map((item, i, arr) => (
                            <div key={item.year} className="flex items-center flex-shrink-0">
                                <div className="text-center px-6 py-4">
                                    <div className="font-display text-2xl gradient-gold">{item.year}</div>
                                    <div className="text-[11px] text-gray-500 mt-1 tracking-wider uppercase">{item.event}</div>
                                </div>
                                {i < arr.length - 1 && (
                                    <div className="w-12 h-px bg-gradient-to-r from-gold/30 to-transparent flex-shrink-0" />
                                )}
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}