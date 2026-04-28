'use client';

import { useEffect, useState } from 'react';
import { TOKEN } from '@/lib/config';

import { ToastProvider } from '@/components/ToastProvider';
import Loader       from '@/components/Loader';
import Particles    from '@/components/Particles';
import Navbar       from '@/components/Navbar';
import Hero         from '@/components/Hero';
import Marquee      from '@/components/Marquee';
import Gallery      from '@/components/Gallery';
import HowToBuy     from '@/components/HowToBuy';
import Legacy       from '@/components/Legacy';
import About        from '@/components/About';
import Tokenomics   from '@/components/Tokenomics';
import Press        from '@/components/Press';
import Community    from '@/components/Community';
import Footer       from '@/components/Footer';

/* ============================================================
   HOME PAGE
   ------------------------------------------------------------
   Merangkai semua komponen. State live stats di-host di sini
   supaya Navbar (price) dan Hero (grid stats) sinkron.
============================================================ */

export default function HomePage() {
    // State untuk fake live stats (di-update setiap 2.5 detik)
    const [stats, setStats] = useState(TOKEN.initialStats);

    useEffect(() => {
        const id = setInterval(() => {
            setStats(prev => ({
                marketCap: prev.marketCap + (Math.random() - 0.45) * 3000,
                liquidity: prev.liquidity + (Math.random() - 0.5)  * 800,
                holders:   prev.holders   + (Math.random() > 0.7 ? 1 : 0),
                volume24h: prev.volume24h + (Math.random() - 0.4)  * 2000,
                price:     prev.price     + (Math.random() - 0.48) * 0.000005,
            }));
        }, 2500);

        return () => clearInterval(id);
    }, []);

    return (
        <ToastProvider>
            <Loader />
            <Particles />

            <Navbar navPrice={stats.price} />

            <main>
                <Hero stats={stats} />
                <Marquee />
                <Gallery />
                <HowToBuy />
                <Legacy />
                <About />
                <Tokenomics />
                <Press />
                <Community />
            </main>

            <Footer />
        </ToastProvider>
    );
}
