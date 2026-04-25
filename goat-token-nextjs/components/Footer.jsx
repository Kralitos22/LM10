import { TOKEN } from '@/lib/config';

/* ============================================================
   FOOTER
   ------------------------------------------------------------
   Logo, nav ringkas, disclaimer crypto, copyright.
============================================================ */

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="py-12 px-5 border-t border-gold/10 bg-night">
            <div className="max-w-6xl mx-auto">
                {/* Top row: logo + nav */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-8">
                    <div className="flex items-center gap-2">
                        <span className="text-3xl">⚽</span>
                        <span className="font-display text-2xl gradient-gold tracking-wider">
                            {TOKEN.ticker}
                        </span>
                    </div>
                    <div className="flex gap-5 text-gray-500 text-sm">
                        <a href="#home"       className="hover:text-gold">Home</a>
                        <a href="#how-to-buy" className="hover:text-gold">How to Buy</a>
                        <a href="#tokenomics" className="hover:text-gold">Tokenomics</a>
                        <a href="#community"  className="hover:text-gold">Community</a>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-night-card rounded-xl p-5 border border-gold/10 mb-6">
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                        <strong className="text-gold">DISCLAIMER:</strong> {TOKEN.ticker} is a meme coin created purely for entertainment and community purposes. It has no intrinsic value, no guarantees of return, and carries extremely high financial risk. Cryptocurrency investments are volatile and you could lose your entire investment. This website does not constitute financial advice, investment advice, or any other form of professional advice. Always do your own research (DYOR) and only invest what you can afford to lose. {TOKEN.ticker} is not affiliated with, endorsed by, or connected to any professional athlete, league, or sports organization.
                    </p>
                </div>

                <p className="text-center text-gray-600 text-xs">
                    © {year} {TOKEN.name} · Built for the community · Not financial advice
                </p>
            </div>
        </footer>
    );
}
