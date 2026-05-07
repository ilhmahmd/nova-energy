# Nova Energy — React Vite Website

Website solar energy company Nova, dibangun dengan React + Vite + Framer Motion.

## Tech Stack

- **React 18** + **Vite 5**
- **Framer Motion** — animasi stagger reveal, scroll-triggered, hover effects
- **CSS Modules** — scoped styling per komponen
- **Font**: Plus Jakarta Sans (Google Fonts)

## Cara Menjalankan

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan dev server

```bash
npm run dev
```

Buka `http://localhost:5173`

### 3. Build untuk production

```bash
npm run build
npm run preview
```

## Struktur Folder

```
nova-energy/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── About.jsx / .module.css
│   │   ├── Benefits.jsx / .module.css
│   │   ├── Solutions.jsx / .module.css
│   │   ├── HowItWorks.jsx / .module.css
│   │   ├── Impact.jsx / .module.css
│   │   ├── CTA.jsx / .module.css
│   │   └── Footer.jsx / .module.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Mengganti Background Image

Semua gambar saat ini menggunakan Unsplash (placeholder). Untuk mengganti:

1. Tambahkan foto kamu ke folder `src/assets/`
2. Import di komponen: `import heroBg from '../assets/hero-bg.jpg'`
3. Gunakan sebagai `src={heroBg}` pada tag `<img>`

### File yang perlu diganti:
- **Hero**: `Hero.jsx` → ganti URL img background
- **Solutions**: `Solutions.jsx` → ganti 3 URL img kartu
- **HowItWorks**: `HowItWorks.jsx` → ganti URL img center
- **Impact**: `Impact.jsx` → ganti URL img kanan
- **CTA**: `CTA.jsx` → ganti URL img background

## Fitur Animasi

| Section | Animasi |
|---------|---------|
| Navbar | Slide down + fade on load |
| Hero | Stagger reveal (title → subtitle → button → bottom) |
| About | Word-by-word scroll reveal |
| Benefits | Stagger card reveal saat scroll |
| Solutions | Stagger reveal + hover: grayscale → color + deskripsi muncul |
| How It Works | Reveal kartu + scale gambar center |
| Impact | Slide in dari kiri & kanan |
| CTA | Fade up saat scroll |

## Responsif

- **Desktop**: ≥ 900px — full layout
- **Tablet**: 600–900px — 2 kolom
- **Mobile**: ≤ 600px — single column, hamburger menu
