'use client';

import { useEffect, useState } from 'react';
import { TOKEN, formatMoney } from '@/lib/config';
import { useToast } from './ToastProvider';
import ScrollReveal from './ScrollReveal';

/* ============================================================
   HERO
   ------------------------------------------------------------
   Bagian paling besar & impactful. Berisi:
   - Tagline + headline besar
   - Countdown ke launch date
   - Contract address + copy button (toast + confetti)
   - Dua CTA (BUY + DEX)
   - Fake live stats (MC, Liq, Holders, Vol)
============================================================ */

export default function Hero({ stats }) {
    const { showToast, fireConfetti } = useToast();

    // Copy CA ke clipboard
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(TOKEN.contract);
            showToast('Contract copied to clipboard!');
            fireConfetti(40);
        } catch {
            showToast('Copy failed — please copy manually');
        }
    };

    // Handler tombol BUY
    const handleBuy = () => {
        fireConfetti(80);
        showToast("LET'S GOOO! 🚀");
        // Uncomment untuk auto-redirect:
        // setTimeout(() => window.open(TOKEN.buyUrl, '_blank'), 600);
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-24 pb-12 field-bg hero-glow overflow-hidden"
        >
            {/* Floating emoji decoration */}
            <div className="absolute top-28 left-[8%] text-5xl float opacity-40 hidden md:block">🏆</div>
            <div className="absolute top-40 right-[10%] text-5xl float opacity-40 hidden md:block" style={{ animationDelay: '-2s' }}>⚽</div>
            <div className="absolute bottom-32 left-[12%] text-4xl float opacity-40 hidden md:block" style={{ animationDelay: '-1s' }}>🔥</div>

            <div className="relative max-w-6xl mx-auto px-5 text-center z-10">
                {/* Tag NOW LIVE */}
                <ScrollReveal className="inline-flex items-center gap-2 bg-night-card border border-gold/30 rounded-full px-4 py-2 mb-8">
                    <span className="w-2 h-2 bg-football-red rounded-full live-dot"></span>
                    <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold">
                        NOW LIVE ON SOLANA
                    </span>
                </ScrollReveal>

                {/* Headline utama */}
                <ScrollReveal as="h1" className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-wide headline-shadow">
                    <span className="block text-white">THE</span>
                    <span className="block gradient-gold">GOAT COIN</span>
                </ScrollReveal>

                {/* Subheadline */}
                <ScrollReveal as="p" className="mt-6 text-xl md:text-3xl font-bold text-gray-300">
                    The Last Dance · <span className="text-gold">World Cup 2026</span>
                </ScrollReveal>
                <ScrollReveal as="p" className="mt-3 max-w-2xl mx-auto text-gray-400 text-base md:text-lg">
                    The greatest comeback in crypto history starts here. Built by the community, fueled by legends, destined for the moon. ⚽🚀
                </ScrollReveal>

                {/* Countdown */}
                <ScrollReveal className="mt-10">
                    <p className="text-xs md:text-sm tracking-[0.4em] text-gold/70 mb-4 font-semibold">
                        COUNTDOWN TO THE KICKOFF
                    </p>
                    <Countdown />
                </ScrollReveal>

                {/* Contract Address + Copy */}
                <ScrollReveal className="mt-10 max-w-2xl mx-auto">
                    <p className="text-xs tracking-[0.3em] text-gray-500 mb-2 font-semibold">CONTRACT ADDRESS</p>
                    <div className="flex items-center bg-night-card border border-gold/25 rounded-full p-1.5 hover:border-gold/60 transition-colors">
                        <code className="flex-1 px-4 py-2 text-xs md:text-sm font-mono text-gray-300 truncate">
                            {TOKEN.contract}
                        </code>
                        <button
                            onClick={handleCopy}
                            className="btn-gold px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy
                        </button>
                    </div>
                </ScrollReveal>

                {/* CTAs */}
                <ScrollReveal className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={handleBuy}
                        className="btn-gold text-lg md:text-xl px-10 py-4 rounded-full font-extrabold uppercase tracking-wider"
                    >
                        ⚡ BUY {TOKEN.ticker} NOW
                    </button>
                    <a
                        href={TOKEN.dexUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost text-base px-8 py-4 rounded-full font-bold uppercase tracking-wider"
                    >
                        📊 View on DexScreener
                    </a>
                </ScrollReveal>

                {/* Live stats grid */}
                <ScrollReveal className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    <StatCard label="MARKET CAP" value={formatMoney(stats.marketCap)} />
                    <StatCard label="LIQUIDITY"  value={formatMoney(stats.liquidity)} />
                    <StatCard label="HOLDERS"    value={stats.holders.toLocaleString()} />
                    <StatCard label="VOLUME 24H" value={formatMoney(stats.volume24h)} />
                </ScrollReveal>
            </div>
        </section>
    );
}

/* ============================================================
   COUNTDOWN TIMER (sub-component)
============================================================ */
function Countdown() {
    const [time, setTime] = useState(null);

    useEffect(() => {
        const target = new Date(TOKEN.launchDate).getTime();

        const tick = () => {
            const diff = target - Date.now();
            if (diff <= 0) {
                setTime({ done: true });
                return;
            }
            setTime({
                d: Math.floor(diff / 86400000),
                h: Math.floor((diff % 86400000) / 3600000),
                m: Math.floor((diff % 3600000) / 60000),
                s: Math.floor((diff % 60000) / 1000),
            });
        };

        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    if (!time) return <div className="flex justify-center gap-3 md:gap-6 min-h-[100px]"></div>;

    if (time.done) {
        return <p className="text-3xl font-display gradient-gold">🏆 KICKOFF! WE&apos;RE LIVE</p>;
    }

    const Box = ({ val, label }) => (
        <div className="bg-night-card border border-gold/30 rounded-xl px-3 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[100px]">
            <div className="font-display text-3xl md:text-5xl gradient-gold">
                {String(val).padStart(2, '0')}
            </div>
            <div className="text-[10px] md:text-xs text-gray-500 tracking-[0.2em] mt-1 font-semibold">
                {label}
            </div>
        </div>
    );

    return (
        <div className="flex justify-center gap-3 md:gap-6">
            <Box val={time.d} label="DAYS"  />
            <Box val={time.h} label="HOURS" />
            <Box val={time.m} label="MINS"  />
            <Box val={time.s} label="SECS"  />
        </div>
    );
}

/* ============================================================
   STAT CARD (sub-component)
============================================================ */
function StatCard({ label, value }) {
    return (
        <div className="card-glow rounded-2xl p-5">
            <p className="text-xs text-gray-500 font-semibold tracking-wider">{label}</p>
            <p className="text-xl md:text-2xl font-display gradient-gold mt-1">{value}</p>
        </div>
    );
}
