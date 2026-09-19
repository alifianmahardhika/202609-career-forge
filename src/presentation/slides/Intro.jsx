import { Slide } from "@revealjs/react";
import { SlideFooter } from "../components/index.jsx";
import { FONT } from "../slideConfig.js";

export function IntroSlides() {
  return (
    <>
      <Slide
        className="title-slide"
        notes="Selamat siang semua. Terima kasih PPI sudah mengundang. Hari ini saya mau cerita, bukan kuliah — soal apa yang terjadi setelah tulisan disertasi selesai dicetak. Sesi ini singkat, sisa waktu untuk tanya jawab."
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
        <div className="kicker">Perkenalan</div>
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
        <div className="grid cols-3" style={{ marginTop: "1.2em" }}>
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
        <p style={{ marginTop: "0.8em" }}>
          <small>
            Sesi ini cerita, bukan kuliah — silakan potong kapan saja, sisa
            waktu sengaja saya sisakan banyak untuk tanya jawab.
          </small>
        </p>
        <SlideFooter num="01" accent="perkenalan" />
      </Slide>
    </>
  );
}
