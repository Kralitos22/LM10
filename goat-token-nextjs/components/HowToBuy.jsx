import ScrollReveal from './ScrollReveal';
import { TOKEN } from '@/lib/config';

/* ============================================================
   HOW TO BUY
   ------------------------------------------------------------
   4 step cards dengan nomor besar, icon emoji, dan deskripsi.
============================================================ */

const STEPS = [
    {
        num:   '01',
        icon:  '👛',
        title: 'GET A WALLET',
        desc:  'Download Phantom or Solflare — the top Solana wallets. Free, safe, and takes 60 seconds.',
    },
    {
        num:   '02',
        icon:  '💰',
        title: 'GET SOME SOL',
        desc:  'Buy SOL on any major exchange (Binance, Coinbase, OKX) and send it to your Phantom wallet.',
    },
    {
        num:   '03',
        icon:  '🔄',
        title: 'SWAP ON JUPITER',
        desc:  `Head to Jupiter or Raydium, paste the ${TOKEN.ticker} contract address, and swap your SOL.`,
    },
    {
        num:   '04',
        icon:  '🏆',
        title: 'WELCOME, LEGEND',
        desc:  "You're officially part of the greatest team in crypto. Now hold, hype, and play to win.",
    },
];

export default function HowToBuy() {
    return (
        <section id="how-to-buy" className="py-24 px-5">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal className="text-center mb-16">
                    <p className="text-gold font-bold tracking-[0.4em] text-sm mb-3">PLAYBOOK</p>
                    <h2 className="font-display text-5xl md:text-7xl gradient-gold headline-shadow">
                        HOW TO BUY
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                        4 simple moves. Your ticket to the GOAT legacy.
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STEPS.map(step => (
                        <ScrollReveal key={step.num} className="card-glow rounded-2xl p-7 relative">
                            <div className="text-7xl font-display text-gold/10 absolute top-3 right-5">
                                {step.num}
                            </div>
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <h3 className="font-display text-2xl text-gold mb-2 tracking-wide">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
