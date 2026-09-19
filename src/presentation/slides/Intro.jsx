import { Slide } from "@revealjs/react";
import { Card, Kicker, Pill, SlideFooter } from "../components/index.jsx";
import { FONT } from "../slideConfig.js";

export function IntroSlides() {
  return (
    <>
      <Slide
        className="title-slide"
        notes="Selamat siang semua. Terima kasih PPI sudah mengundang. Hari ini saya mau cerita, bukan kuliah — soal apa yang terjadi setelah tulisan disertasi selesai dicetak."
      >
        <div className="super">ARKENA CENDRAWASIH · CAREER FORGE</div>
        <h1>
          <span className="grad">PhD, then what?</span>
        </h1>
        <p className="lead" style={{ marginLeft: 0, maxWidth: "80%" }}>
          Exploring careers in academia, industry, and beyond.
        </p>
        <div className="meta">
          ALIFIAN MAHARDHIKA MAULANA <span className="dot">·</span>
          DATA ENGINEER, EFTAX CO., LTD. <span className="dot">·</span>
          19 SEPTEMBER 2026, 15:00–17:00 JST
        </div>
      </Slide>

      <Slide style={{ fontSize: FONT.intro_about }}>
        <Kicker>Perkenalan</Kicker>
        <h2>Rute yang saya tempuh</h2>
        <div className="grid cols-4" style={{ marginTop: "1em" }}>
          <div className="item">
            <div className="yr">2012 — 2016</div>
            <span className="role">S1 Fisika</span>
            <span className="place">ITB · Earth &amp; Complex System</span>
          </div>
          <div className="item">
            <div className="yr">2017 — 2019</div>
            <span className="role">S2 Computational Science</span>
            <span className="place">Kanazawa University</span>
          </div>
          <div className="item">
            <div className="yr">2019 — 2022</div>
            <span className="role">PhD Applied Mathematics</span>
            <span className="place">Kanazawa University · beasiswa MEXT</span>
          </div>
          <div className="item">
            <div className="yr">2021 — sekarang</div>
            <span className="role">Software → Data Engineer</span>
            <span className="place">eftax Co., Ltd., Osaka · penuh waktu sejak Apr 2023</span>
          </div>
        </div>
        <div className="grid cols-3" style={{ marginTop: "1.3em" }}>
          <div className="stat">
            <span className="num">3 tahun</span>
            <span className="lbl">masa studi PhD</span>
          </div>
          <div className="stat">
            <span className="num">1 tahun</span>
            <span className="lbl">kerja sambil menulis disertasi</span>
          </div>
          <div className="stat">
            <span className="num">5 tahun</span>
            <span className="lbl">di industri sampai hari ini</span>
          </div>
        </div>
        <SlideFooter num="01" accent="perkenalan" />
      </Slide>

      <Slide style={{ fontSize: FONT.intro_agenda }}>
        <Kicker>Sebelum mulai</Kicker>
        <h2>Ini sesi cerita, bukan kuliah</h2>
        <div className="grid cols-2" style={{ marginTop: "1.2em" }}>
          <Card>
            <h3>Yang akan saya bagikan</h3>
            <ul>
              <li>Persimpangan yang saya hadapi di tahun terakhir PhD</li>
              <li>Kenapa lulusan PhD punya tempat di industri, bukan cuma akademia</li>
              <li>Bagaimana saya (masih) membangun skill setelah lulus</li>
            </ul>
          </Card>
          <Card>
            <h3>Silakan potong kapan saja</h3>
            <p>
              Tidak ada slide teknis di sini. Kalau ada yang mengganjal atau
              mau tahu lebih dalam soal satu poin, angkat tangan saja — kita
              obrolkan di tempat. Sisa waktu sengaja saya sisakan banyak
              untuk diskusi.
            </p>
            <p style={{ marginTop: "0.6em" }}>
              <Pill>~20 menit cerita</Pill> <Pill variant="pink">Q&amp;A terbuka</Pill>
            </p>
          </Card>
        </div>
        <SlideFooter num="02" accent="agenda" />
      </Slide>
    </>
  );
}
