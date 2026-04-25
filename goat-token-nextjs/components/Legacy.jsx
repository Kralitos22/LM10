import ScrollReveal from './ScrollReveal';
import { TOKEN } from '@/lib/config';

/* ============================================================
   LEGACY / BUILT FOR WEB3
   ------------------------------------------------------------
   Story section dengan narasi + card "Champions Hall".
   Ganti teks di bawah dengan cerita proyek kamu.
============================================================ */

export default function Legacy() {
    return (
        <section id="legacy" className="py-24 px-5 bg-gradient-to-b from-night to-night-soft">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal className="text-center mb-12">
                    <p className="text-gold font-bold tracking-[0.4em] text-sm mb-3">THE STORY</p>
                    <h2 className="font-display text-5xl md:text-7xl gradient-gold headline-shadow">
                        BUILT FOR WEB3
                    </h2>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Narasi kiri */}
                    <ScrollReveal>
                        <p className="text-gray-300 text-lg leading-relaxed mb-5">
                            The world&apos;s biggest stage has always belonged to champions — the ones who dance under pressure, score when it matters, and leave a mark that outlasts the final whistle.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-5">
                            {TOKEN.ticker} carries that same energy into Solana. Born from football culture, fueled by meme power, and engineered for the Web3 generation that refuses to settle for average. No VCs. No team allocation. Just pure community, pure hustle, pure legacy.
                        </p>
                        <p className="text-gold font-bold text-lg">
                            ⚡ This isn&apos;t just a token. It&apos;s the last dance.
                        </p>
                    </ScrollReveal>

                    {/* Champions Hall card kanan */}
                    <ScrollReveal>
                        <div className="card-glow rounded-3xl p-8 text-center">
                            <div className="text-7xl mb-4">🏆</div>
                            <h3 className="font-display text-3xl gradient-gold mb-3">
                                CHAMPIONS HALL
                            </h3>
                            <p className="text-gray-400 mb-6">
                                Early holders earn their spot in the eternal Champions Hall — airdrops, exclusive drops, and legend status.
                            </p>
                            <div className="grid grid-cols-3 gap-3 text-center">
                                {[
                                    { icon: '⚽', label: 'SOLANA'    },
                                    { icon: '💎', label: 'DIAMOND'   },
                                    { icon: '🔥', label: 'LEGENDARY' },
                                ].map(item => (
                                    <div key={item.label} className="bg-night rounded-xl p-3 border border-gold/10">
                                        <div className="text-2xl">{item.icon}</div>
                                        <p className="text-[10px] text-gray-500 mt-1 tracking-wider">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
