import { TOKEN } from '@/lib/config';

/* ============================================================
   FOOTER — MESSI EDITION
============================================================ */

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="py-12 px-5 border-t border-gold/10 section-dark relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Top row: logo + nav */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-gold/30 shadow-[0_0_15px_rgba(250,204,21,0.15)]">
                            <img src="/lm10-circle-nav.png" alt="LM10" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <span className="font-display text-3xl gradient-gold tracking-wider block leading-none">$GOAT</span>
                            <span className="text-[9px] text-gold/50 tracking-[0.3em] uppercase">LM10 · The GOAT Coin</span>
                        </div>
                    </div>
                    <div className="flex gap-6 text-gray-500 text-sm">
                        {['#home', '#gallery', '#how-to-buy', '#about', '#tokenomics', '#community'].map(href => (
                            <a key={href} href={href} className="hover:text-gold transition-colors">
                                {href.replace('#','').toUpperCase()}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Social strip */}
                <div className="flex justify-center gap-4">
                    <a
                        href={TOKEN.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass rounded-full px-5 py-2 text-xs text-gray-400 hover:text-gold hover:border-gold/40 transition-all flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        X / Twitter
                    </a>
                    <a
                        href={TOKEN.social.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass rounded-full px-5 py-2 text-xs text-gray-400 hover:text-gold hover:border-gold/40 transition-all flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>
                        Telegram
                    </a>
                </div>

                {/* Disclaimer */}
                <div className="glass rounded-2xl p-6 mb-6 border border-gold/8">
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                        <strong className="text-gold/70">DISCLAIMER:</strong> {TOKEN.ticker} is a meme coin created purely for entertainment and community purposes. It has no intrinsic value and carries extremely high financial risk. Cryptocurrency investments are volatile — you could lose your entire investment. This website does not constitute financial advice. Always DYOR and only invest what you can afford to lose. {TOKEN.ticker} is not affiliated with, endorsed by, or connected to Lionel Messi, the Argentina national football team, or any professional sports organization.
                    </p>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-gray-600 text-xs">
                        © {year} {TOKEN.name} · Built for the community · Not financial advice
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="text-gold font-bold">{TOKEN.ticker}</span>
                        <span>·</span>
                        <span>Powered by Solana</span>
                        <span>·</span>
                        <span className="text-gold">⚡ Blazing Fast</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}