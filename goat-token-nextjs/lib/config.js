/* ============================================================
   KONFIGURASI TOKEN
   ============================================================
   GANTI SEMUA NILAI DI BAWAH INI dengan data token kamu.
   File ini di-import oleh semua komponen.
   ============================================================ */

export const TOKEN = {
    name:       'GOAT TOKEN',                                        // GANTI NAMA TOKEN
    ticker:     '$GOAT',                                             // GANTI TICKER
    supply:     '777,000,000',                                       // GANTI SUPPLY
    contract:   'So11111111111111111111111111111111111111112',       // GANTI CONTRACT ADDRESS
    launchDate: '2026-06-11T18:00:00Z',                              // GANTI TANGGAL LAUNCH / EVENT
    buyUrl:     'https://jup.ag/',                                   // GANTI LINK SWAP
    dexUrl:     'https://dexscreener.com/',                          // GANTI LINK DEXSCREENER

    // Social media links
    social: {
        twitter:   'https://twitter.com/yourgoatcoin',
        telegram:  'https://t.me/yourgoatcoin',
        discord:   'https://discord.gg/goat',
        instagram: 'https://instagram.com/yourgoatcoin',
    },

    // Stats awal (angka palsu untuk animasi hype)
    initialStats: {
        marketCap: 1250000,
        liquidity: 380000,
        holders:   8420,
        volume24h: 920000,
        price:     0.00042,
    },
};

// Helper formatter dipakai beberapa komponen
export function formatMoney(n) {
    if (n >= 1_000_000) return '$' + (n / 1_000_000).toFixed(2) + 'M';
    if (n >= 1_000)     return '$' + (n / 1_000).toFixed(1)   + 'K';
    return '$' + n.toFixed(0);
}
