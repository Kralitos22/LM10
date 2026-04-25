# $GOAT TOKEN — Landing Page (Next.js)

Landing page meme coin Solana yang dibangun dengan **Next.js 14 (App Router)** + **Tailwind CSS**. Sudah dikonfigurasi untuk **static export** sehingga bisa di-deploy ke **Hostinger shared hosting** (paket termurah pun bisa).

---

## 🎯 Fitur

- ✅ Dark theme premium (gold + red + green football vibe)
- ✅ Countdown timer ke launch date
- ✅ Copy Contract Address + toast notification + confetti
- ✅ Fake live stats (Market Cap, Liquidity, Holders, Volume)
- ✅ Scroll reveal animation via Intersection Observer
- ✅ Particle background canvas (ringan, tanpa library)
- ✅ Marquee gold bergulir
- ✅ Mobile responsive + hamburger menu
- ✅ SEO meta tags + Open Graph
- ✅ Loading screen dengan ring spinner

---

## 📋 Prasyarat

- **Node.js 18+** (disarankan 20 LTS) — [download di sini](https://nodejs.org/)
- npm (sudah include di Node.js)
- Akun Hostinger dengan akses **File Manager** atau FTP

---

## 🚀 Cara Menjalankan di Komputer (Development)

```bash
# 1. Masuk ke folder proyek
cd goat-token-nextjs

# 2. Install dependencies (hanya sekali)
npm install

# 3. Jalankan dev server
npm run dev
```

Buka browser ke **http://localhost:3000** untuk preview.

Setiap perubahan file akan otomatis ter-refresh (hot reload).

---

## ⚙️ Cara Customize Token

Buka file **`lib/config.js`** dan ganti nilai-nilai di objek `TOKEN`:

```javascript
export const TOKEN = {
    name:       'NAMA TOKEN KAMU',
    ticker:     '$TICKER',
    supply:     '1,000,000,000',
    contract:   'AlamatContractAddress...',
    launchDate: '2026-12-31T00:00:00Z',
    buyUrl:     'https://jup.ag/swap/SOL-TOKEN',
    dexUrl:     'https://dexscreener.com/solana/...',
    social: {
        twitter:   'https://twitter.com/...',
        telegram:  'https://t.me/...',
        discord:   'https://discord.gg/...',
        instagram: 'https://instagram.com/...',
    },
    // ...
};
```

Untuk **meta SEO** (judul tab browser, deskripsi Google, gambar share di Twitter/Facebook), edit **`app/layout.jsx`** di bagian `export const metadata`.

Untuk teks panjang (About, Legacy, Quotes), edit langsung file komponen terkait di folder `components/`.

---

## 🏗️ Cara Build untuk Production

```bash
npm run build
```

Proses build akan membuat folder **`out/`** berisi HTML/CSS/JS statis siap upload.

---

## 🌐 Cara Deploy ke Hostinger

### Opsi A — Via File Manager hPanel (paling mudah)

1. Jalankan `npm run build` di komputermu
2. Login ke [hPanel Hostinger](https://hpanel.hostinger.com/)
3. Buka **Files → File Manager**
4. Masuk ke folder **`public_html/`**
5. **Hapus file `default.php`** atau file default yang ada di sana
6. **Upload SEMUA isi folder `out/`** (pakai drag-and-drop, atau zip dulu lalu extract di hPanel)
7. Selesai — buka domain kamu di browser 🎉

### Opsi B — Via FTP (pakai FileZilla)

1. Jalankan `npm run build`
2. Dapatkan kredensial FTP dari hPanel → **Files → FTP Accounts**
3. Connect pakai FileZilla
4. Upload isi folder `out/` ke `public_html/` di server

### Opsi C — Via Git (Hostinger Premium ke atas)

1. Push proyek ke GitHub
2. Di hPanel → **Advanced → Git** → connect repository
3. Set build command: `npm run build`
4. Set publish directory: `out`

---

## 📁 Struktur Folder

```
goat-token-nextjs/
├── app/
│   ├── layout.jsx          ← metadata SEO + fonts global
│   ├── page.jsx            ← merangkai semua komponen
│   └── globals.css         ← Tailwind + custom CSS
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx            ← countdown, CA copy, live stats
│   ├── Marquee.jsx
│   ├── HowToBuy.jsx
│   ├── Legacy.jsx
│   ├── About.jsx
│   ├── Tokenomics.jsx
│   ├── Press.jsx
│   ├── Community.jsx
│   ├── Footer.jsx
│   ├── Loader.jsx          ← loading screen
│   ├── Particles.jsx       ← background canvas
│   ├── ScrollReveal.jsx    ← wrapper animasi fade-up
│   └── ToastProvider.jsx   ← toast & confetti global
├── lib/
│   └── config.js           ← ⭐ EDIT DI SINI UNTUK GANTI DATA TOKEN
├── public/                 ← asset statis (gambar, dll)
├── next.config.mjs         ← config static export
├── tailwind.config.mjs
├── postcss.config.mjs
├── package.json
└── README.md
```

---

## 🔧 Troubleshooting

**Error saat `npm install`:**
Pastikan Node.js versi 18+ terinstall. Cek dengan `node -v`.

**Build error "out directory":**
Pastikan `output: 'export'` ada di `next.config.mjs`.

**Halaman putih di Hostinger:**
Pastikan file `index.html` ada langsung di `public_html/` (tidak di dalam subfolder `out/`).

**Font tidak muncul:**
Google Fonts di-load dari internet — pastikan browser user bisa akses googleapis.com.

**Warning Next.js Image:**
Kita sudah pakai `images: { unoptimized: true }` di config, jadi aman untuk static hosting.

---

## 📝 Catatan Penting

Landing page ini bisa berjalan 100% statis. **Fake live stats** yang berganti-ganti angka itu hanya animasi JavaScript di browser — bukan data asli.

Kalau mau menampilkan data real dari blockchain (market cap, holders, price beneran), kamu perlu fetch dari:
- **DexScreener API** — https://docs.dexscreener.com/api/reference
- **Birdeye API** — https://docs.birdeye.so/
- **Helius RPC** — untuk query Solana langsung

Caranya: edit file `app/page.jsx` bagian `useEffect`, ganti logika `setStats` jadi `fetch()` ke API pilihan kamu.

---

## ⚠️ Disclaimer

Template ini disediakan untuk tujuan edukasi dan pembuatan landing page meme coin. Selalu:
- **DYOR** (Do Your Own Research) sebelum invest di crypto apa pun
- Jangan janjikan return atau klaim palsu di landing page
- Sertakan disclaimer yang jelas (sudah ada di Footer)
- Patuhi hukum lokal terkait promosi aset crypto

**Bukan nasihat finansial.** Template ini tidak berafiliasi dengan atlet, liga, atau organisasi olahraga mana pun.

---

Dibuat dengan ⚡ untuk komunitas. Siap GOAT! 🏆
