'use client';

import { useEffect, useState } from 'react';
import { TOKEN, formatMoney } from '@/lib/config';
import { useToast } from './ToastProvider';
import ScrollReveal from './ScrollReveal';
import { useDexScreenerStats } from '@/lib/useDexScreenerStats';

/* ============================================================
   HERO — MESSI EDITION (LIVE DEXSCREENER)
============================================================ */

export default function Hero() {
    // ==================== LIVE STATS DARI DEXSCREENER ====================
    const liveStats = useDexScreenerStats(
        '6m1ZWwXmVFTPWpyTP8PNNGfFmumGRV6Xhf1iwoLReGjh',   // Pair Address kamu (sudah terisi)
        'solana'
    );

    const { showToast, fireConfetti } = useToast();

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(TOKEN.contract);
            showToast('Contract copied to clipboard!');
            fireConfetti(40);
        } catch {
            showToast('Copy failed — please copy manually');
        }
    };

    const handleBuy = () => {
        fireConfetti(80);
        showToast("LET'S GOOO! 🚀");
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center messi-bg messi-bg-overlay grid-overlay pt-24 pb-16 overflow-hidden"
        >
            {/* Radial gradient bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-[#050508] to-transparent z-[2] pointer-events-none" />

            {/* Floating star decorations */}
            <div className="absolute top-36 left-[6%] w-1 h-1 bg-gold rounded-full opacity-50 float-slow shadow-[0_0_8px_rgba(250,204,21,0.8)] hidden md:block" />
            <div className="absolute top-48 right-[8%] w-1.5 h-1.5 bg-gold rounded-full opacity-40 float-slow hidden md:block" style={{ animationDelay: '-2s' }} />
            <div className="absolute bottom-44 left-[15%] w-1 h-1 bg-white/40 rounded-full float-slow hidden md:block" style={{ animationDelay: '-1s' }} />
            <div className="absolute top-28 right-[20%] w-0.5 h-0.5 bg-gold rounded-full opacity-60 float-slow hidden md:block" style={{ animationDelay: '-3s' }} />
            <div className="absolute bottom-60 right-[12%] w-1 h-1 bg-white/30 rounded-full float-slow hidden md:block" style={{ animationDelay: '-4s' }} />

            <div className="relative max-w-5xl mx-auto px-5 text-center z-10">

                {/* Badge */}
                <ScrollReveal className="inline-flex items-center gap-2 glass-gold rounded-full px-5 py-2.5 mb-8 border-glow">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gold/40 flex-shrink-0 flex items-center justify-center bg-black/20">
                        <img src="/lm10-circle-nav.png" alt="LM10" className="w-full h-full object-cover" />
                    </div>
                    <span className="w-2.5 h-2.5 bg-football-green rounded-full live-dot" />
                    <span className="text-xs md:text-sm font-bold tracking-[0.35em] text-gold">
                        NOW LIVE ON SOLANA
                    </span>
                    <span className="w-5 h-5 flex items-center justify-center text-sm">⚡</span>
                </ScrollReveal>

                {/* Main headline */}
                <ScrollReveal as="h1" className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-none tracking-wide">
                    <span className="block text-white/90">THE</span>
                    <span className="block gradient-aurora">GOAT COIN</span>
                </ScrollReveal>

                {/* Subtitle with Messi badge */}
                <ScrollReveal as="p" className="mt-6 text-xl md:text-3xl font-bold text-white/80">
                    Messi&apos;s Legacy · <span className="text-gold">World Cup 2026</span>
                </ScrollReveal>

                {/* Messi quote pill */}
                <ScrollReveal className="mt-5 inline-flex items-center gap-2 glass rounded-full px-5 py-2">
                    <span className="text-lg">⚽</span>
                    <span className="text-sm md:text-base text-gray-300 italic font-medium">
                        &ldquo;In the end, it&apos;s not the years in your life that count. It&apos;s the life in your years.&rdquo;
                    </span>
                    <span className="text-xs text-gold font-bold tracking-wider">— LM10</span>
                </ScrollReveal>

                {/* Countdown */}
                <ScrollReveal className="mt-10">
                    <p className="text-xs tracking-[0.5em] text-gold/70 mb-5 font-bold uppercase">
                        Countdown to Glory
                    </p>
                    <Countdown />
                </ScrollReveal>

                {/* Contract Address + Copy */}
                <ScrollReveal className="mt-10 max-w-xl mx-auto">
                    <p className="text-[10px] tracking-[0.35em] text-gray-500 mb-2 font-semibold">CONTRACT ADDRESS</p>
                    <div className="flex items-center glass-gold rounded-full p-1.5 border-glow hover:border-gold/60 transition-all">
                        <code className="flex-1 px-4 py-2.5 text-xs md:text-sm font-mono text-gray-300 truncate">
                            {TOKEN.contract}
                        </code>
                        <button
                            onClick={handleCopy}
                            className="btn-gold px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-2 flex-shrink-0"
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
                        className="btn-gold text-lg md:text-xl px-12 py-4 rounded-full font-extrabold uppercase tracking-wider flex items-center gap-3"
                    >
                        <span>⚡</span> BUY {TOKEN.ticker} NOW
                    </button>
                    <a
                        href={TOKEN.dexUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-gold text-base px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-2"
                    >
                        <span>📊</span> DexScreener
                    </a>
                </ScrollReveal>

                {/* ==================== LIVE STATS GRID ==================== */}
                <ScrollReveal className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    <StatCard 
                        label="MARKET CAP" 
                        value={formatMoney(liveStats.marketCap)} 
                        icon="📈" 
                    />
                    <StatCard 
                        label="LIQUIDITY" 
                        value={formatMoney(liveStats.liquidity)} 
                        icon="💧" 
                    />
                    <StatCard 
                        label="PRICE" 
                        value={
                            liveStats.price < 0.01 
                                ? `$${liveStats.price.toFixed(8)}` 
                                : `$${liveStats.price.toLocaleString()}`
                        } 
                        icon="💲" 
                    />
                    <StatCard 
                        label="24H VOLUME" 
                        value={formatMoney(liveStats.volume24h)} 
                        icon="⚡" 
                    />
                </ScrollReveal>

                {/* Scroll indicator */}
                <div className="mt-12 flex flex-col items-center gap-2 opacity-50">
                    <span className="text-xs tracking-[0.3em] text-gold/60 font-semibold">SCROLL</span>
                    <div className="w-5 h-8 border-2 border-gold/40 rounded-full flex justify-center pt-1">
                        <div className="w-1 h-2 bg-gold/60 rounded-full animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================================================
   COUNTDOWN TIMER
============================================================ */
function Countdown() {
    const [time, setTime] = useState(null);

    useEffect(() => {
        const target = new Date(TOKEN.launchDate).getTime();
        const tick = () => {
            const diff = target - Date.now();
            if (diff <= 0) { setTime({ done: true }); return; }
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

    if (!time) return <div className="flex justify-center gap-3 md:gap-5 min-h-[110px]" />;

    if (time.done) {
        return <p className="text-3xl font-display gradient-gold">🏆 KICKOFF! WE&apos;RE LIVE</p>;
    }

    const Box = ({ val, label }) => (
        <div className="glass-gold rounded-2xl px-4 py-4 md:px-7 md:py-5 min-w-[75px] md:min-w-[105px] border-glow">
            <div className="font-display text-3xl md:text-5xl gradient-gold leading-none">
                {String(val).padStart(2, '0')}
            </div>
            <div className="text-[10px] md:text-xs text-gray-400 tracking-[0.2em] mt-2 font-semibold uppercase">
                {label}
            </div>
        </div>
    );

    return (
        <div className="flex justify-center gap-3 md:gap-5">
            <Box val={time.d} label="DAYS"  />
            <Box val={time.h} label="HOURS" />
            <Box val={time.m} label="MINS"  />
            <Box val={time.s} label="SECS"  />
        </div>
    );
}

/* ============================================================
   STAT CARD (Sudah ada di file kamu)
============================================================ */
function StatCard({ label, value, icon }) {
    return (
        <div className="card-glow rounded-2xl p-5 text-center glass">
            <div className="text-2xl mb-2">{icon}</div>
            <p className="text-[10px] text-gray-500 tracking-widest font-semibold uppercase">{label}</p>
            <p className="text-xl md:text-2xl font-display gradient-gold mt-2">{value}</p>
        </div>
    );
}
