



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
    contract:   'Av6zkyDCFmpn7kNH3JuzDdPMTMkR22PzWma9JZh5pump',
    launchDate: '2026-06-11T18:00:00Z',
    buyUrl:     'https://jup.ag/',
    dexUrl:     'https://dexscreener.com/',

    social: {
        twitter:   'https://x.com/goat_lm1o?s=21',
        telegram:  'https://t.me/+VnGH23m8pZo1ZGI9',
    },

    // Stats awal (angka palsu untuk animasi hype)
    
};

// Helper formatter dipakai beberapa komponen
export function formatMoney(n) {
    if (n >= 1_000_000) return '$' + (n / 1_000_000).toFixed(2) + 'M';
    if (n >= 1_000)     return '$' + (n / 1_000).toFixed(1)   + 'K';
    return '$' + n.toFixed(0);
}
