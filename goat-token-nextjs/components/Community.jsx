import ScrollReveal from './ScrollReveal';
import { TOKEN } from '@/lib/config';

/* ============================================================
   COMMUNITY — MESSI EDITION
============================================================ */

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

const SOCIALS = [
    {
        Icon: TwitterIcon,
        label: 'X',
        sublabel: 'TWITTER',
        handle: '@LM10_life',
        href: TOKEN.social.twitter,
        color: 'hover:bg-white/5',
    },
    {
        Icon: TelegramIcon,
        label: 'TELEGRAM',
        sublabel: 'COMMUNITY',
        handle: 'Open Community',
        href: TOKEN.social.telegram,
        color: 'hover:bg-blue-500/10',
    },
];

export default function Community() {
    return (
        <section id="community" className="py-24 px-5 section-gradient relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            <div className="max-w-4xl mx-auto text-center">
                <ScrollReveal>
                    <span className="messi-badge mb-6 inline-flex">⚽ JOIN THE SQUAD</span>
                    <h2 className="font-display text-5xl md:text-7xl gradient-gold mb-5 headline-shadow">
                        JOIN THE MOVEMENT
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto mb-12">
                        Be part of the greatest comeback in crypto history. Connect with fellow legends and stay updated.
                    </p>
                </ScrollReveal>

                {/* Social cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
                    {SOCIALS.map(({ Icon, label, sublabel, handle, href }) => (
                        <ScrollReveal key={label}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-glow rounded-2xl p-8 flex items-center gap-5 group glass border-glow hover:border-gold/60"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-all">
                                    <Icon />
                                </div>
                                <div className="text-left">
                                    <p className="font-display text-2xl text-gold tracking-wide">{label}</p>
                                    <p className="text-[11px] text-gray-500 tracking-[0.2em] uppercase mb-1">{sublabel}</p>
                                    <p className="text-gray-400 text-sm">{handle}</p>
                                </div>
                                <div className="ml-auto">
                                    <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-all">
                                        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Messi quote callout */}
                <ScrollReveal className="mt-12 glass-gold rounded-2xl p-8 border-glow max-w-xl mx-auto">
                    <div className="text-4xl mb-3">🏆</div>
                    <p className="text-gray-300 text-lg italic mb-3">
                        &ldquo;Success is not final. Failure is not fatal. It is the courage to continue that counts.&rdquo;
                    </p>
                    <p className="text-gold font-bold text-sm tracking-wider uppercase">— Lionel Messi, LM10</p>
                </ScrollReveal>
            </div>
        </section>
    );
}