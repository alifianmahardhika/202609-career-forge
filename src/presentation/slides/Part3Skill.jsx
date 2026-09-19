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
        <Kicker>Tiga lapis skill, dibangun sambil jalan</Kicker>
        <h2>Belajar dari proyek nyata, bukan berhenti dulu</h2>
        <div className="grid cols-3" style={{ marginTop: "1em" }}>
          <Card>
            <h3>Fondasi teknis</h3>
            <ul>
              <li>Bahasa &amp; tooling industri</li>
              <li>Cloud, mis. AWS</li>
            </ul>
          </Card>
          <Card>
            <h3>Konteks bisnis</h3>
            <ul>
              <li>Kenapa proyek dikerjakan</li>
              <li>Dampak, bukan cuma kode</li>
            </ul>
          </Card>
          <Card>
            <h3>Komunikasi</h3>
            <ul>
              <li>Menjelaskan ke non-teknis</li>
              <li>Bahasa untuk kerja lintas budaya</li>
            </ul>
          </Card>
        </div>
        <p style={{ marginTop: "0.9em" }}>
          Dua tahun jadi Education Mentor di MySkill mengajarkan saya bahwa
          cara terbaik memastikan benar-benar paham sesuatu adalah dengan
          menjelaskannya ke orang lain — jadi menulis dan mengajar juga
          bagian dari cara saya belajar.
        </p>
        <p style={{ marginTop: "0.6em" }}>
          <small>Mulai sebelum lulus:</small>{" "}
          <Pill>Magang</Pill> <Pill variant="pink">LinkedIn aktif</Pill>{" "}
          <Pill variant="good">Ngobrol dengan alumni</Pill>
        </p>
        <SlideFooter num="07" accent="strategi skill" />
      </Slide>
    </>
  );
}
