/* ============================================================
   MARQUEE
   ------------------------------------------------------------
   Teks berjalan dengan background gold. Item diduplikasi
   supaya loop-nya mulus (lihat CSS .marquee-track).
============================================================ */

const ITEMS = [
    '⚽ GOAT TOKEN',
    '🏆 THE LAST DANCE',
    '🔥 $GOAT',
    '⭐ LEGENDS NEVER DIE',
    '🚀 TO THE MOON',
    '💎 CHAMPIONS ONLY',
];

export default function Marquee() {
    // Duplikat 2x untuk seamless loop
    const doubled = [...ITEMS, ...ITEMS];

    return (
        <div className="bg-gold text-night py-4 border-y-4 border-night overflow-hidden">
            <div className="marquee-track font-display text-2xl md:text-3xl tracking-wider">
                {doubled.map((item, i) => (
                    <span key={i} className="mx-8">{item}</span>
                ))}
            </div>
        </div>
    );
}
