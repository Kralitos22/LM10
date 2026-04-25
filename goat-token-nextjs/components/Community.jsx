import ScrollReveal from './ScrollReveal';
import { TOKEN } from '@/lib/config';

/* ============================================================
   COMMUNITY / JOIN THE MOVEMENT
============================================================ */

// SVG icon components (inline)
const TwitterIcon = () => (
    <svg className="w-10 h-10 text-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);
const TelegramIcon = () => (
    <svg className="w-10 h-10 text-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
    </svg>
);
const DiscordIcon = () => (
    <svg className="w-10 h-10 text-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
);
const InstagramIcon = () => (
    <svg className="w-10 h-10 text-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
);

const SOCIALS = [
    { Icon: TwitterIcon,   label: 'X / TWITTER', handle: '@yourgoatcoin',    href: TOKEN.social.twitter   },
    { Icon: TelegramIcon,  label: 'TELEGRAM',    handle: 't.me/yourgoatcoin',href: TOKEN.social.telegram  },
    { Icon: DiscordIcon,   label: 'DISCORD',     handle: 'discord.gg/goat',  href: TOKEN.social.discord   },
    { Icon: InstagramIcon, label: 'INSTAGRAM',   handle: '@yourgoatcoin',    href: TOKEN.social.instagram },
];

export default function Community() {
    return (
        <section id="community" className="py-24 px-5 bg-gradient-to-b from-night-soft to-night">
            <div className="max-w-4xl mx-auto text-center">
                <ScrollReveal>
                    <p className="text-gold font-bold tracking-[0.4em] text-sm mb-3">THE SQUAD</p>
                    <h2 className="font-display text-5xl md:text-7xl gradient-gold mb-5 headline-shadow">
                        JOIN THE MOVEMENT
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                        Be part of the greatest comeback in crypto history. Join the locker room, pick your jersey, and play with legends.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {SOCIALS.map(({ Icon, label, handle, href }) => (
                        <ScrollReveal key={label} as="a">
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-glow rounded-2xl p-6 flex flex-col items-center gap-3 group"
                            >
                                <Icon />
                                <span className="font-display text-xl text-gold tracking-wide">{label}</span>
                                <span className="text-xs text-gray-500">{handle}</span>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
