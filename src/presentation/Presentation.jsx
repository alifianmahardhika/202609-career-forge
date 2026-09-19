import { Deck } from '@revealjs/react'
import RevealHighlight from 'reveal.js/plugin/highlight'
import RevealNotes from 'reveal.js/plugin/notes'

import { IntroSlides } from './slides/Intro.jsx'
import { Part1Slides } from './slides/Part1Simpang.jsx'
import { Part2Slides } from './slides/Part2Industri.jsx'
import { Part3Slides } from './slides/Part3Skill.jsx'
import { OutroSlides } from './slides/Outro.jsx'

// Detect narrow viewport for mobile layout mode
const isNarrow = window.matchMedia('(max-width: 768px)').matches

export function Presentation() {
  return (
    <>
      {/* Decorative forge embers */}
      <div className="ember" style={{ left: '5%',  animationDuration: '18s', animationDelay: '0s'  }} />
      <div className="ember" style={{ left: '25%', animationDuration: '22s', animationDelay: '5s'  }} />
      <div className="ember" style={{ left: '55%', animationDuration: '20s', animationDelay: '2s'  }} />
      <div className="ember" style={{ left: '78%', animationDuration: '24s', animationDelay: '9s'  }} />
      <div className="ember" style={{ left: '92%', animationDuration: '21s', animationDelay: '12s' }} />

      <Deck
        config={{
          hash: true,
          slideNumber: 'c/t',
          transition: isNarrow ? 'none' : 'slide',
          backgroundTransition: 'fade',
          controls: true,
          progress: true,
          center: !isNarrow,
          width:    isNarrow ? '100%' : 1280,
          height:   isNarrow ? '100%' : 720,
          margin:   isNarrow ? 0       : 0.06,
          minScale: isNarrow ? 1       : 0.4,
          maxScale: isNarrow ? 1       : 1.6,
          disableLayout: isNarrow,
          embedded: false,
        }}
        plugins={[RevealHighlight, RevealNotes]}
      >
        <IntroSlides />
        <Part1Slides />
        <Part2Slides />
        <Part3Slides />
        <OutroSlides />
      </Deck>
    </>
  )
}
