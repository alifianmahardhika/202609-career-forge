import { Slide } from "@revealjs/react";
import { Card, Kicker, Pill, SlideFooter, Quote } from "../components/index.jsx";
import { FONT } from "../slideConfig.js";

export function Part1Slides() {
  return (
    <>
      <Slide className="section-slide">
        <div className="num">01</div>
        <h2>Persimpangan Setelah PhD</h2>
        <Quote style={{ marginTop: "0.3em", marginBottom: "1.2em" }}>
          "Habis ini apa?" Pertanyaan yang muncul terus di tahun terakhir,
          bukan cuma dari orang tua, tapi dari diri sendiri.
        </Quote>
        <SlideFooter num="part 1" accent="persimpangan" />
      </Slide>

      <Slide style={{ fontSize: FONT.p1_decision }}>
        <Kicker>Keputusan saya</Kicker>
        <h2>Kenapa saya condong ke industri</h2>
        <div className="split">
          <div>
            <p>
              Sebenarnya saya sempat mencoba dua-duanya. Setelah lulus,
              profesor saya menawari posisi postdoc, dan saya jalani
              sekitar enam bulan sambil tetap part time di eftax, jadi dua
              dunia itu berjalan paralel dulu, bukan langsung diputuskan.
            </p>
            <p>
              Tapi begitu ada ruang untuk memilih, jawabannya jadi jelas:
              saya memang suka ngoding. Dari dulu suka utak-atik komputer.
              Jadi saya pilih fokus penuh ke eftax, bukan karena postdoc
              buruk, tapi karena passion saya memang di situ.
            </p>
          </div>
          <Card>
            <h3>Fakta di balik keputusan</h3>
            <p style={{ marginBottom: "0.4em" }}>
              <Pill>Sep 2021</Pill> mulai part time Software Engineer di eftax
            </p>
            <p style={{ marginBottom: "0.4em" }}>
              <Pill variant="good">Sep 2022</Pill> sidang &amp; lulus PhD
            </p>
            <p style={{ marginBottom: "0.4em" }}>
              <Pill>Okt 2022</Pill> mulai postdoc, paralel part time di eftax
            </p>
            <p style={{ marginBottom: "0.4em" }}>
              <Pill variant="pink">Apr 2023</Pill> memilih fokus penuh ke eftax
            </p>
          </Card>
        </div>
        <SlideFooter num="02" accent="keputusan" />
      </Slide>

      <Slide style={{ fontSize: FONT.p1_overlap }}>
        <Kicker>Realita yang jarang diceritakan</Kicker>
        <h2>Setahun terakhir: kerja sambil menulis disertasi</h2>
        <div className="split">
          <div>
            <p>
              Saya punya privilege: lab saya tidak mewajibkan datang tiap
              hari, dan seminar cuma seminggu sekali. Jadi saya banyak kerja
              dari rumah, ke kampus hanya untuk kuliah dan seminar. Sisa
              waktunya saya pakai untuk ambil course dan part time.
            </p>
            <p>
              Yang dikorbankan: saya tidak terlalu "wah" secara akademik.
              Publikasi seadanya, tidak sampai Q1, yang penting lulus,
              karena fokus saya memang di IT. Di waktu yang sama, anak
              pertama saya lahir, istri saya juga sedang menempuh S3, dan
              pandemi COVID sedang berlangsung. Itu titik paling berat di
              periode ini.
            </p>
          </div>
          <Card style={{ borderColor: "var(--primary)", boxShadow: "0 0 0 2px rgba(217,164,65,0.18)" }}>
            <h3>Kenapa ini penting diceritakan</h3>
            <p>
              Ini bukan cerita ideal "lulus dulu baru kerja". Kenyataannya
              banyak jalan tidak rapi, banyak hal berjalan bersamaan, dan
              itu tidak apa-apa.
            </p>
          </Card>
        </div>
        <SlideFooter num="03" accent="overlap" />
      </Slide>
    </>
  );
}
