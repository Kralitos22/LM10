import ScrollReveal from './ScrollReveal';
import { TOKEN } from '@/lib/config';

/* ============================================================
   TOKENOMICS
   ------------------------------------------------------------
   4 stat cards + bar allocation.
============================================================ */

const STATS = [
    { label: 'TOTAL SUPPLY', value: TOKEN.supply,  sub: 'Fixed forever'          },
    { label: 'LP BURNED',    value: '🔥 100%',     sub: 'No rug possible'        },
    { label: 'TAXES',        value: '0 / 0',       sub: 'Pure and simple'        },
    { label: 'TEAM',         value: '0%',          sub: 'Fully community owned'  },
];

const ALLOCATION = [
    { icon: '🟡', label: 'Liquidity Pool',       pct: 80, gradient: 'from-gold-bright to-gold'       },
    { icon: '🔴', label: 'Marketing & CEX',      pct: 15, gradient: 'from-football-red to-gold-deep' },
    { icon: '🟢', label: 'Community Airdrops',   pct: 5,  gradient: 'from-football-green to-gold'    },
];

export default function Tokenomics() {
    return (
        <section id="tokenomics" className="py-24 px-5 bg-night-soft">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal className="text-center mb-16">
                    <p className="text-gold font-bold tracking-[0.4em] text-sm mb-3">THE NUMBERS</p>
                    <h2 className="font-display text-5xl md:text-7xl gradient-gold headline-shadow">
                        TOKENOMICS
                    </h2>
                </ScrollReveal>

                {/* Stat cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {STATS.map(stat => (
                        <ScrollReveal key={stat.label} className="card-glow rounded-2xl p-7 text-center">
                            <p className="text-xs text-gray-500 tracking-wider font-semibold">{stat.label}</p>
                            <p className="font-display text-3xl md:text-4xl gradient-gold mt-2">{stat.value}</p>
                            <p className="text-gray-500 text-sm mt-2">{stat.sub}</p>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Allocation bars */}
                <ScrollReveal className="mt-12 card-glow rounded-2xl p-8">
                    <h3 className="font-display text-2xl gradient-gold mb-6 tracking-wide">ALLOCATION</h3>
                    <div className="space-y-5">
                        {ALLOCATION.map(item => (
                            <div key={item.label}>
                                <div className="flex justify-between text-sm font-semibold mb-1">
                                    <span>{item.icon} {item.label}</span>
                                    <span className="text-gold">{item.pct}%</span>
                                </div>
                                <div className="h-3 bg-night rounded-full overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r ${item.gradient}`}
                                        style={{ width: `${item.pct}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
