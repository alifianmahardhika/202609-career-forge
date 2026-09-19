import { Slide } from "@revealjs/react";
import { Card, Kicker, Pill, SlideFooter } from "../components/index.jsx";
import { FONT } from "../slideConfig.js";

export function Part3Slides() {
  return (
    <>
      <Slide className="section-slide">
        <div className="num">03</div>
        <h2>Strategi Pengembangan Skill</h2>
        <p className="lead" style={{ marginLeft: 0, marginBottom: "1.5em" }}>
          Lulus PhD bukan garis akhir belajar — cuma ganti kurikulum.
        </p>
        <SlideFooter num="part 3" accent="pengembangan skill" />
      </Slide>

      <Slide style={{ fontSize: FONT.p3_layers }}>
        <Kicker>Tiga lapis skill</Kicker>
        <h2>Yang perlu dibangun setelah lulus</h2>
        <div className="grid cols-3" style={{ marginTop: "1.1em" }}>
          <Card>
            <h3>Fondasi teknis</h3>
            <ul>
              <li>Bahasa pemrograman &amp; tooling industri</li>
              <li>Cloud &amp; infrastruktur (mis. AWS)</li>
            </ul>
          </Card>
          <Card>
            <h3>Konteks bisnis &amp; produk</h3>
            <ul>
              <li>Memahami kenapa suatu proyek dikerjakan</li>
              <li>Mengaitkan pekerjaan teknis dengan dampak nyata</li>
            </ul>
          </Card>
          <Card>
            <h3>Komunikasi &amp; bahasa</h3>
            <ul>
              <li>Menjelaskan hal rumit ke audiens non-teknis</li>
              <li>Bahasa Jepang / Inggris untuk kerja lintas budaya</li>
            </ul>
          </Card>
        </div>
        <SlideFooter num="11" accent="tiga lapis" />
      </Slide>

      <Slide style={{ fontSize: FONT.p3_how }}>
        <Kicker>Cara belajarnya</Kicker>
        <h2>Belajar sambil jalan, bukan berhenti dulu</h2>
        <div className="grid cols-2" style={{ marginTop: "1.1em" }}>
          <Card>
            <h3>Belajar lewat proyek nyata</h3>
            <p>
              Sebagian besar skill teknis saya sekarang terbentuk dari
              masalah nyata di kantor, bukan dari kursus.
            </p>
          </Card>
          <Card>
            <h3>Sertifikasi seperlunya</h3>
            <p>
              Dipakai sebagai penanda arah belajar (mis. AWS), bukan tujuan
              akhir.
            </p>
          </Card>
          <Card className="col-span-2" style={{ gridColumn: "span 2", borderColor: "var(--accent)" }}>
            <h3>Menulis &amp; mengajar untuk mengunci pemahaman</h3>
            <p>
              Dua tahun jadi Education Mentor di MySkill mengajarkan saya
              bahwa cara terbaik memastikan saya benar-benar paham sesuatu
              adalah dengan menjelaskannya ke orang lain.
            </p>
          </Card>
        </div>
        <SlideFooter num="12" accent="cara belajar" />
      </Slide>

      <Slide style={{ fontSize: FONT.p3_when }}>
        <Kicker>Kapan mulai</Kicker>
        <h2>Sebelum lulus, bukan setelah</h2>
        <div className="split">
          <div>
            <p>
              Membangun jalur ke industri tidak harus menunggu gelar
              selesai. Semakin lama menunggu, semakin banyak yang harus
              dikejar sekaligus di akhir.
            </p>
          </div>
          <Card>
            <h3>Hal kecil yang bisa dimulai sekarang</h3>
            <p style={{ marginBottom: "0.4em" }}><Pill>Magang</Pill> atau proyek paruh waktu</p>
            <p style={{ marginBottom: "0.4em" }}><Pill variant="pink">LinkedIn</Pill> yang aktif &amp; terbarui</p>
            <p style={{ marginBottom: "0.4em" }}><Pill variant="good">Ngobrol</Pill> dengan alumni yang sudah di industri</p>
          </Card>
        </div>
        <SlideFooter num="13" accent="mulai kapan" />
      </Slide>
    </>
  );
}
