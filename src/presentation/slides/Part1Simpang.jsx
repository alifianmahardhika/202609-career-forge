import { Slide } from "@revealjs/react";
import { Card, Kicker, Pill, SlideFooter, Quote } from "../components/index.jsx";
import { FONT } from "../slideConfig.js";

export function Part1Slides() {
  return (
    <>
      <Slide className="section-slide">
        <div className="num">01</div>
        <h2>Persimpangan Setelah PhD</h2>
        <p className="lead" style={{ marginLeft: 0, marginBottom: "1.5em" }}>
          Tahun terakhir studi bukan cuma soal menulis disertasi.
        </p>
        <SlideFooter num="part 1" accent="persimpangan" />
      </Slide>

      <Slide style={{ fontSize: FONT.p1_question }}>
        <Kicker>Pertanyaan yang menghantui</Kicker>
        <h2>"Habis ini apa?"</h2>
        <Quote style={{ fontSize: "1.3em", marginTop: "1em" }}>
          Sekitar satu tahun sebelum sidang, pertanyaan itu muncul terus —
          bukan cuma dari orang tua, tapi dari diri sendiri.
        </Quote>
        <p style={{ marginTop: "1em" }}>
          Tidak ada jawaban tunggal yang benar. Yang ada hanya jalur-jalur
          dengan konsekuensi berbeda, dan waktu yang makin sempit untuk
          memilih.
        </p>
        <SlideFooter num="03" accent="pertanyaan" />
      </Slide>

      <Slide style={{ fontSize: FONT.p1_map }}>
        <Kicker>Peta pilihan</Kicker>
        <h2>Jalur yang terbuka setelah lulus</h2>
        <div className="grid cols-2" style={{ marginTop: "1.1em" }}>
          <Card>
            <h3>Jalur akademia</h3>
            <ul>
              <li>Postdoc di Jepang atau negara lain</li>
              <li>Jalur dosen / peneliti tetap</li>
            </ul>
          </Card>
          <Card>
            <h3>Jalur industri</h3>
            <ul>
              <li>Industri riset (R&amp;D)</li>
              <li>Industri non-riset — engineering, data, produk</li>
            </ul>
          </Card>
          <Card>
            <h3>Jalur mandiri</h3>
            <ul>
              <li>Wirausaha atau proyek sendiri</li>
            </ul>
          </Card>
          <Card>
            <h3>Pulang ke Indonesia</h3>
            <ul>
              <li>Kembali membangun karier di tanah air</li>
            </ul>
          </Card>
        </div>
        <p style={{ marginTop: "0.8em" }}>
          <small>
            Tidak ada yang lebih mulia dari yang lain — semua jalur ini valid,
            tergantung apa yang dicari.
          </small>
        </p>
        <SlideFooter num="04" accent="peta pilihan" />
      </Slide>

      <Slide style={{ fontSize: FONT.p1_decision }}>
        <Kicker>Keputusan saya</Kicker>
        <h2>Kenapa saya condong ke industri</h2>
        <div className="split">
          <div>
            <p>
              Sebenarnya saya sempat mencoba dua-duanya. Setelah lulus,
              profesor saya menawari posisi postdoc, dan saya jalani
              sekitar enam bulan sambil tetap part time di eftax — jadi dua
              dunia itu berjalan paralel dulu, bukan langsung diputuskan.
            </p>
            <p>
              Tapi begitu ada ruang untuk memilih, jawabannya jadi jelas:
              saya memang suka ngoding. Dari dulu suka utak-atik komputer.
              Jadi saya pilih fokus penuh ke eftax — bukan karena postdoc
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
        <SlideFooter num="05" accent="keputusan" />
      </Slide>

      <Slide style={{ fontSize: FONT.p1_overlap }}>
        <Kicker>Realita yang jarang diceritakan</Kicker>
        <h2>Setahun terakhir: kerja sambil menulis disertasi</h2>
        <div className="split">
          <div>
            <p>
              Saya punya privilege: lab saya tidak mewajibkan datang tiap
              hari, dan seminar cuma seminggu sekali. Jadi saya banyak kerja
              dari rumah — ke kampus hanya untuk kuliah dan seminar. Sisa
              waktunya saya pakai untuk ambil course dan part time.
            </p>
            <p>
              Yang dikorbankan: saya tidak terlalu "wah" secara akademik.
              Publikasi seadanya, tidak sampai Q1 — yang penting lulus,
              karena fokus saya memang di IT. Di waktu yang sama, anak
              pertama saya lahir, istri saya juga sedang menempuh S3, dan
              pandemi COVID sedang berlangsung. Itu titik paling berat di
              periode ini.
            </p>
          </div>
          <Card style={{ borderColor: "var(--primary)", boxShadow: "0 0 0 2px rgba(255,201,60,0.18)" }}>
            <h3>Kenapa ini penting diceritakan</h3>
            <p>
              Ini bukan cerita ideal "lulus dulu baru kerja". Kenyataannya
              banyak jalan tidak rapi, banyak hal berjalan bersamaan — dan
              itu tidak apa-apa.
            </p>
          </Card>
        </div>
        <SlideFooter num="06" accent="overlap" />
      </Slide>
    </>
  );
}
