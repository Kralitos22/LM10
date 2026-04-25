/** @type {import('next').NextConfig} */
const nextConfig = {
    // ==========================================================
    // STATIC EXPORT — agar bisa di-upload ke Hostinger shared hosting
    // ==========================================================
    // Setelah `npm run build`, hasil output ada di folder `out/`
    // Upload SEMUA isi folder `out/` ke `public_html/` di Hostinger.
    output: 'export',

    // Karena shared hosting biasanya tidak punya image optimization server
    images: {
        unoptimized: true,
    },

    // Tambahkan trailing slash supaya routing aman di hosting statis
    trailingSlash: true,

    // Kalau mau di-deploy ke subfolder (contoh: domain.com/goat/),
    // uncomment baris di bawah dan ganti sesuai path.
    // basePath: '/goat',
};

export default nextConfig;
