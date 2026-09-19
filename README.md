# PhD, then what?

Slide presentasi untuk sharing session PPI, **19 September 2026** — cerita pengalaman dari PhD ke industri, peluang lulusan PhD di dunia kerja, dan strategi pengembangan skill.

**Pembicara:** Alifian Mahardhika Maulana — Data Engineer, eftax Co., Ltd. (Osaka, Japan)

Dibangun dengan React + Reveal.js + Tailwind v4 + Bun.

---

## Setup & Jalankan Lokal

**Requirements:** [Bun](https://bun.sh) — install sekali di Windows:
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

**Install dependencies + dev server:**
```bash
bun install
bun run dev
```
Buka di browser: `http://localhost:5173`

**Build untuk deploy:**
```bash
bun run build
# output ada di folder dist/ — bisa di-deploy ke GitHub Pages / Netlify
```

---

## Struktur Proyek

```
src/
├── main.jsx                        # entry point
├── index.css                       # Tailwind + Reveal.js CSS + custom theme
├── App.jsx
└── presentation/
    ├── Presentation.jsx            # Deck wrapper + Reveal.js config
    ├── slideConfig.js              # font-size per slide
    ├── components/index.jsx        # Card, Pill, Stat, Kicker, SlideFooter, Quote
    └── slides/
        ├── Intro.jsx                 # perkenalan & agenda
        ├── Part1Simpang.jsx          # persimpangan setelah PhD
        ├── Part2Industri.jsx         # peluang PhD di industri
        ├── Part3Skill.jsx            # strategi pengembangan skill
        └── Outro.jsx                 # rangkuman & Q&A
```

## Sebelum presentasi: isi cerita personal

Beberapa slide sengaja diberi placeholder karena butuh cerita pribadi yang
hanya pembicara yang tahu. Cari `ISI CERITA` di seluruh folder `src/` untuk
menemukan semuanya:

```bash
grep -rn "ISI CERITA" src/
```

Ganti tiap `<Pill variant="warn">ISI CERITA</Pill>` beserta catatan `<small>`
di sebelahnya dengan narasi yang sebenarnya sebelum tampil.

## Navigasi Slide

| Key | Aksi |
|---|---|
| `→` / `Space` | Slide berikutnya |
| `←` | Slide sebelumnya |
| `S` | Speaker notes + timer |
| `F` | Fullscreen |
| `O` / `Esc` | Overview mode |
| `?` | Semua shortcut |
