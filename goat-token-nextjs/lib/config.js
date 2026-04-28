/* ============================================================
   KONFIGURASI TOKEN
   ============================================================
   GANTI SEMUA NILAI DI BAWAH INI dengan data token kamu.
   File ini di-import oleh semua komponen.
   ============================================================ */

export const TOKEN = {
    name:       'GOAT TOKEN',
    ticker:     '$GOAT',
    supply:     '1,000,000,000',
    contract:   'So11111111111111111111111111111111111111112',
    launchDate: '2026-06-11T18:00:00Z',
    buyUrl:     'https://jup.ag/',
    dexUrl:     'https://dexscreener.com/',

    social: {
        twitter:   'https://x.com/goat_lm1o?s=21',
        telegram:  'https://t.me/+VnGH23m8pZo1ZGI9',
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
