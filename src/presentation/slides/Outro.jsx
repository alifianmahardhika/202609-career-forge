import { Slide } from "@revealjs/react";
import { Pill, Quote } from "../components/index.jsx";
import { FONT } from "../slideConfig.js";

export function OutroSlides() {
  return (
    <>
      <Slide className="title-slide" style={{ fontSize: FONT.outro_qa }}>
        <div className="super">CAREER FORGE · PENUTUP</div>
        <h1><span className="grad">Pertanyaan?</span></h1>
        <Quote style={{ marginTop: "0.6em", maxWidth: "80%" }}>
          Temukan passion, kuatkan niat, jangan menyerah menjalani prosesnya.
          Rezeki sudah ditentukan, tapi kita tak pernah tahu kapan
          sampainya — jadi tetaplah berusaha. Karena bersama kesulitan,
          selalu ada kemudahan.
        </Quote>
        <p style={{ marginTop: "0.9em" }}>
          <Pill>Tidak ada jalur yang salah</Pill>{" "}
          <Pill variant="pink">Cara berpikir terbawa, bukan topik</Pill>{" "}
          <Pill variant="good">Mulai sebelum lulus</Pill>
        </p>
        <div className="meta" style={{ marginTop: "1.3em" }}>
          ALIFIAN MAHARDHIKA MAULANA <span className="dot">·</span>
          DATA ENGINEER, EFTAX CO., LTD. <span className="dot">·</span>
          LINKEDIN: ALIFIANMAHARDHIKA
        </div>
      </Slide>
    </>
  );
}
