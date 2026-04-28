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
import { useDexScreenerStats } from '@/lib/useDexScreenerStats';

/* ============================================================
   HOME PAGE
   ------------------------------------------------------------
   Merangkai semua komponen. State live stats di-host di sini
   supaya Navbar (price) dan Hero (grid stats) sinkron.
============================================================ */

export default function HomePage() {
    const liveStats = useDexScreenerStats(
    'llllllllllllllll',   // Pair Address kamu
    'solana'
  );
    return (
        <ToastProvider>
            <Loader />
            <Particles />

           <Navbar navPrice={liveStats.price} />

            <main>
                <Hero />
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
