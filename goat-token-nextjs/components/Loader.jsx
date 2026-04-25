'use client';

import { useEffect, useState } from 'react';

/* ============================================================
   LOADER
   ------------------------------------------------------------
   Tampil saat page pertama di-load. Otomatis fade out setelah
   800ms begitu React hydrate.
============================================================ */

export default function Loader() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHidden(true), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loader-screen ${hidden ? 'hidden-loader' : ''}`}>
            <div className="text-6xl md:text-7xl font-display gradient-gold mb-6 tracking-wider">
                $GOAT
            </div>
            <div className="loader-ring"></div>
            <p className="text-gold mt-6 font-semibold tracking-[0.3em] text-sm">
                LOADING THE LEGEND…
            </p>
        </div>
    );
}
