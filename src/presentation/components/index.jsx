export function Kicker({ children }) {
  return <span className="kicker">{children}</span>
}

export function Card({ children, className = '', style }) {
  return (
    <div className={`card ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}

export function Pill({ children, variant = '' }) {
  return (
    <span className={['pill', variant].filter(Boolean).join(' ')}>
      {children}
    </span>
  )
}

export function Stat({ num, label, style }) {
  return (
    <div className="stat" style={style}>
      <span className="num">{num}</span>
      <span className="lbl">{label}</span>
    </div>
  )
}

export function SlideFooter({ num, accent }) {
  return (
    <div className="slide-footer">
      {num} · <span className="accent">{accent}</span>
    </div>
  )
}

export function Quote({ children, style }) {
  return (
    <p className="quote" style={style}>
      {children}
    </p>
  )
}

export function SlideBody({ children, style, className = '' }) {
  return (
    <div className={`slide-body ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}
