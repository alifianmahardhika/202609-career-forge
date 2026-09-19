import { Slide } from "@revealjs/react";
import { Card, Kicker, Pill, SlideFooter } from "../components/index.jsx";
import { FONT } from "../slideConfig.js";

export function OutroSlides() {
  return (
    <>
      <Slide style={{ fontSize: FONT.outro_takeaways }}>
        <Kicker>Kalau dirangkum</Kicker>
        <h2>Lima hal yang ingin saya tinggalkan</h2>
        <div className="grid cols-2" style={{ marginTop: "1em" }}>
          <Card>
            <h3>1. Tidak ada jalur yang salah</h3>
            <p>Akademia, industri, wirausaha — semua valid, tergantung apa yang dicari.</p>
          </Card>
          <Card>
            <h3>2. Cara berpikir terbawa, topik tidak</h3>
            <p>Perusahaan membeli kebiasaan berpikir riset, bukan judul disertasi.</p>
          </Card>
          <Card>
            <h3>3. Mulai sebelum lulus</h3>
            <p>Jalur ke industri dibangun bertahap, bukan diputuskan sekaligus di akhir.</p>
          </Card>
          <Card>
            <h3>4. Belajar tidak berhenti setelah toga</h3>
            <p>Kurikulumnya cuma berganti — dari lab ke proyek nyata.</p>
          </Card>
        </div>
        <Card style={{ marginTop: "0.9em", borderColor: "var(--primary)", boxShadow: "0 0 0 2px rgba(255,201,60,0.18)" }}>
          <h3>5. Temukan passion, lalu bertahan di prosesnya</h3>
          <p>
            Kuatkan niat dan jangan menyerah menjalani prosesnya. Rezeki
            kita sudah ditentukan, tapi kita tidak pernah tahu kapan
            sampainya dan seberapa besar porsinya — jadi tetaplah berusaha.
            Karena bersama kesulitan, selalu ada kemudahan.
          </p>
        </Card>
        <SlideFooter num="14" accent="rangkuman" />
      </Slide>

      <Slide className="title-slide" style={{ fontSize: FONT.outro_qa }}>
        <div className="super">CAREER FORGE · Q&amp;A</div>
        <h1><span className="grad">Pertanyaan?</span></h1>
        <p className="lead" style={{ marginLeft: 0, maxWidth: "80%" }}>
          Silakan tanya apa saja — soal keputusan karier, PhD, atau hidup
          di Jepang. Sisa waktu kita ini.
        </p>
        <div className="meta" style={{ marginTop: "1.5em" }}>
          ALIFIAN MAHARDHIKA MAULANA <span className="dot">·</span>
          DATA ENGINEER, EFTAX CO., LTD. <span className="dot">·</span>
          LINKEDIN: ALIFIANMAHARDHIKA
        </div>
      </Slide>
    </>
  );
}
