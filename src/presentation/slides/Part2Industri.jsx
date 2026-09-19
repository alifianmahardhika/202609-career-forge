import { Slide } from "@revealjs/react";
import { Card, Kicker, Pill, SlideFooter } from "../components/index.jsx";
import { FONT } from "../slideConfig.js";

export function Part2Slides() {
  return (
    <>
      <Slide className="section-slide">
        <div className="num">02</div>
        <h2>Peluang PhD di Industri</h2>
        <p className="lead" style={{ marginLeft: 0, marginBottom: "1.5em" }}>
          Gelar itu bukan tiket sekali pakai untuk lab saja.
        </p>
        <SlideFooter num="part 2" accent="peluang industri" />
      </Slide>

      <Slide style={{ fontSize: FONT.p2_myths }}>
        <Kicker>Mitos vs kenyataan</Kicker>
        <h2>Tiga anggapan yang bikin ragu</h2>
        <div className="grid cols-3" style={{ marginTop: "1.1em" }}>
          <Card>
            <h3>"Overqualified"</h3>
            <p>
              Perusahaan justru sering mencari orang yang bisa berpikir
              lebih dalam dari sekadar mengikuti instruksi.
            </p>
          </Card>
          <Card>
            <h3>"PhD cuma buat riset"</h3>
            <p>
              Cara berpikir riset — bertanya, menguji, memperbaiki — dipakai
              di hampir semua peran, bukan cuma lab.
            </p>
          </Card>
          <Card>
            <h3>"Harus sesuai bidang disertasi"</h3>
            <p>
              Topik disertasi jarang jadi pekerjaan sehari-hari. Yang
              terbawa adalah caranya, bukan isinya.
            </p>
          </Card>
        </div>
        <SlideFooter num="04" accent="mitos" />
      </Slide>

      <Slide style={{ fontSize: FONT.p2_case }}>
        <Kicker>Studi kasus: saya sendiri</Kicker>
        <h2>Dari crack path &amp; random matrix ke data engineering</h2>
        <div className="split">
          <div>
            <p>
              Disertasi saya soal <strong>numerical crack path selection</strong>{" "}
              dan pendekatan <strong>Random Matrix Theory</strong> untuk
              pasar saham serta portofolio energi. Tidak ada satu pun yang
              secara langsung dipakai di pekerjaan sekarang sebagai Data
              Engineer.
            </p>
            <p>
              Yang tersambung bukan topiknya, tapi cara berpikirnya: memecah
              sistem kompleks jadi bagian yang bisa dianalisis, lalu
              membangun ulang jadi sesuatu yang berguna.
            </p>
          </div>
          <Card>
            <h3>Benang merahnya</h3>
            <p style={{ marginBottom: "0.4em" }}>
              <Pill>Pemodelan matematis</Pill> → merancang pipeline data
            </p>
            <p style={{ marginBottom: "0.4em" }}>
              <Pill variant="pink">Analisis numerik</Pill> → debugging &amp; optimasi sistem
            </p>
          </Card>
        </div>
        <SlideFooter num="05" accent="studi kasus" />
      </Slide>

      <Slide style={{ fontSize: FONT.p2_surprise }}>
        <Kicker>Yang ternyata sudah terlatih</Kicker>
        <h2>Bukan kejutan, tapi kelanjutan ritme</h2>
        <div className="grid cols-2" style={{ marginTop: "1em" }}>
          <Card>
            <h3>Hal yang biasanya jadi kejutan pindah dari riset ke kerja</h3>
            <ul>
              <li>Kecepatan dihargai di atas kesempurnaan</li>
              <li>Kerja dalam tim, bukan riset sendirian</li>
              <li>Legacy code milik orang lain, bukan kode sendiri dari nol</li>
              <li>Ritme lapor progress ke atasan secara rutin</li>
            </ul>
          </Card>
          <Card style={{ borderColor: "var(--primary)", boxShadow: "0 0 0 2px rgba(217,164,65,0.18)" }}>
            <h3>Untungnya, saya sudah terbiasa</h3>
            <p>
              Terbiasa seminar mingguan dan lapor progress ke supervisor
              selama S3 itu ternyata sudah melatih ritme kerja. Begitu masuk
              industri, ritme stand-up dan laporan ke atasan terasa
              familiar — bukan hal baru yang harus dipelajari dari nol.
            </p>
          </Card>
        </div>
        <SlideFooter num="06" accent="ritme kerja" />
      </Slide>
    </>
  );
}
