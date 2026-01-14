# Opini Kita - UNIDA Gontor

<div align="center">

![Preview](https://blogger.googleusercontent.com/img/a/AVvXsEjevPfI6C9Bel5TtUSp5m11Ur5-ZLe4YU2goqBcQFHwKAyrQW0ygBLFp8y41cM3hbXyjm-WO-Ec2H63d5z8Ipi8W6HUPk0L2YWT-3033cSdaS0YxXkotDGwxazZ5YHR_jfE8P3zCJL_mlGPZjqgkzcasMHw_MQTicNMEoxk7HvWN0gSZgM8Ud0n9vDK5bwY)

**Platform Opini Mahasiswa Universitas Darussalam Gontor**

[![React](https://img.shields.io/badge/React-19.2.3-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-purple)](https://vite.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8)](https://tailwindcss.com/)

</div>

---

## Tentang Proyek

**Opini Kita** adalah platform digital publikasi mahasiswa Universitas Darussalam (UNIDA) Gontor yang didirikan sejak tahun 2014. Platform ini dikelola oleh Departemen Riset & Diskusi dan menjadi wadah bagi mahasiswa untuk mengekspresikan pemikiran, opini, dan artikel tentang berbagai tema pendidikan, Islam, teknologi, dan isu sosial.

Platform ini menggabungkan estetika koran vintage klasik dengan teknologi web modern, menciptakan pengalaman membaca yang unik dan bernuansa akademik Islami.

---

## Fitur Utama

### 1. **Beranda / Homepage**
- Hero section dengan citra arsitektur UNIDA Gontor dan kutipan Islami
- Grid layout menampilkan artikel-opini terbaru dengan gambar estetik
- Tag kategori, nama penulis, dan tanggal publikasi

### 2. **Tulis Opini**
- Form pembuatan artikel dengan sistem autentikasi
- Kategori: Pendidikan, Sosial & Politik, Islam, Sastra & Budaya, Teknologi
- Wajib login menggunakan Nama dan NIM mahasiswa

### 3. **Asisten Redaksi AI**
- Integrasi Google Gemini AI untuk membantu penulisan
- Analisis tone, saran grammar, dan ringkasan otomatis
- Meningkatkan kualitas artikel sebelum publikasi

### 4. **Tampilan Artikel**
- Template artikel dengan estetika koran vintage
- Drop cap styling, filter sepia, dan elemen dekoratif
- Fitur share dan print

### 5. **Informasi Departemen**
- Halaman About Departemen Riset & Diskusi
- Profil anggota tim dengan foto dan peran
- Filosofi dan struktur departemen

### 6. **Autentikasi Pengguna**
- Sistem login sederhana menggunakan Nama dan NIM
- Tampilan profil pengguna di header

---

## Tech Stack

| Teknologi | Deskripsi |
|-----------|-----------|
| **React 19.2.3** | Frontend framework dengan TypeScript |
| **Vite 6.2.0** | Build tool untuk development cepat |
| **Tailwind CSS** | Styling dengan custom color palette |
| **Lucide React** | Icon library |
| **Google Gemini AI** | AI integration untuk asisten redaksi |

### Desain & Estetika
- **Tema**: Vintage/Newspaper dengan nuansa sepia
- **Warna**: Paper (#f4f1ea), Ink (#2d2a26), Sepia (#e6dfd1), Accent (#8c3a3a)
- **Font**: Playfair Display (headings), Courier Prime (UI text)
- **Responsive**: Mobile, tablet, dan desktop

---

## Instalasi

### Prasyarat

Pastikan Anda telah menginstal:
- **Node.js** (v18 atau lebih tinggi)
- **npm** atau **yarn** atau **pnpm**

### Langkah-langkah Instalasi

1. **Clone repository**
```bash
git clone <repository-url>
cd web-opini-kita
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**

Buat file `.env.local` di root project dan tambahkan:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

Untuk mendapatkan API key, kunjungi: [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **Jalankan development server**
```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

5. **Build untuk production**
```bash
npm run build
```

File hasil build akan berada di folder `dist/`.

6. **Preview production build**
```bash
npm run preview
```

---

## Struktur Project

```
web-opini-kita/
├── components/           # Komponen React
│   ├── Header.tsx        # Navigasi header dengan auth
│   ├── Footer.tsx        # Footer dengan external links
│   ├── HomePage.tsx      # Homepage dengan hero dan article list
│   ├── OpinionForm.tsx   # Form pembuatan artikel dengan AI
│   ├── ArticleView.tsx   # Tampilan baca artikel
│   ├── ArticleTemplate.tsx # Template layout artikel
│   ├── LoginForm.tsx     # Form login user
│   ├── AboutDept.tsx     # Halaman About departemen
│   └── OpinionList.tsx   # Grid artikel opini
├── services/
│   └── geminiService.ts  # Service integrasi AI
├── App.tsx               # Main app dengan routing
├── index.tsx             # Entry point
├── types.ts              # Interface TypeScript
├── package.json          # Dependencies dan scripts
├── vite.config.ts        # Konfigurasi Vite
├── tsconfig.json         # Konfigurasi TypeScript
└── index.html            # HTML template
```

---

## Preview Website

![Preview](https://blogger.googleusercontent.com/img/a/AVvXsEjevPfI6C9Bel5TtUSp5m11Ur5-ZLe4YU2goqBcQFHwKAyrQW0ygBLFp8y41cM3hbXyjm-WO-Ec2H63d5z8Ipi8W6HUPk0L2YWT-3033cSdaS0YxXkotDGwxazZ5YHR_jfE8P3zCJL_mlGPZjqgkzcasMHw_MQTicNMEoxk7HvWN0gSZgM8Ud0n9vDK5bwY)

---

## Kontribusi

Kontribusi dari mahasiswa UNIDA Gontor sangat diapresiasi. Silakan fork repository dan buat pull request untuk perubahan yang diusulkan.

---

## Departemen Riset & Diskusi

Platform ini dikelola oleh Departemen Riset & Diskusi UNIDA Gontor dengan visi mewujudkan budaya literasi dan diskusi intelektual di kalangan mahasiswa.

---

## Lisensi

&copy; 2024 Opini Kita - UNIDA Gontor. All rights reserved.
