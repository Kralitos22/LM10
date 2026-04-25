'use client';

import { useEffect, useState } from 'react';
import { TOKEN } from '@/lib/config';

/* ============================================================
   NAVBAR (sticky, dengan live price ticker + mobile menu)
============================================================ */

const NAV_LINKS = [
    { href: '#home',       label: 'HOME' },
    { href: '#how-to-buy', label: 'HOW TO BUY' },
    { href: '#legacy',     label: 'LEGACY' },
    { href: '#about',      label: 'ABOUT' },
    { href: '#press',      label: 'THE PRESS' },
    { href: '#community',  label: 'COMMUNITY' },
];

export default function Navbar({ navPrice }) {
    const [scrolled, setScrolled]     = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Efek styling ketika user scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            id="navbar"
            className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-gold/10 transition-all
                ${scrolled ? 'bg-night/95 shadow-lg' : 'bg-night/75'}`}
        >
            <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2">
                    <span className="text-3xl">⚽</span>
                    <span className="font-display text-2xl md:text-3xl gradient-gold tracking-wider">
                        {TOKEN.ticker}
                    </span>
                </a>

                {/* Desktop menu */}
                <ul className="hidden lg:flex items-center gap-8 font-semibold text-sm tracking-wide">
                    {NAV_LINKS.map(link => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-gold transition-colors">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Live price + CTA + mobile toggle */}
                <div className="flex items-center gap-3">
                    {/* Live ticker mini */}
                    <div className="hidden md:flex items-center gap-2 bg-night-card px-3 py-1.5 rounded-full border border-gold/20">
                        <span className="w-2 h-2 bg-football-green rounded-full live-dot"></span>
                        <span className="text-xs font-semibold text-gray-400">LIVE</span>
                        <span className="text-xs font-bold text-gold">${navPrice.toFixed(5)}</span>
                    </div>

                    <a
                        href="#how-to-buy"
                        className="btn-gold hidden sm:inline-flex px-5 py-2.5 rounded-full font-extrabold text-sm uppercase tracking-wider"
                    >
                        Buy Now
                    </a>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMobileOpen(v => !v)}
                        className="lg:hidden p-2"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-night-soft border-t border-gold/10">
                    <ul className="px-5 py-4 space-y-3 font-semibold">
                        {NAV_LINKS.map(link => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="block py-2 hover:text-gold"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#how-to-buy"
                                className="btn-gold block text-center mt-3 py-3 rounded-full font-extrabold uppercase"
                                onClick={() => setMobileOpen(false)}
                            >
                                Buy Now
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
