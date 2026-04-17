import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="/" className="nav__logo">Jason McFarland</a>

        {/* Desktop nav */}
        <nav className="nav__links nav__links--desktop">
          <a href="/#work">Work</a>
          <a href="/#skills">Skills</a>
          <a href="mailto:jxmcfarland@gmail.com">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav__cta">Resume</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="nav__hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`nav__hamburger-icon ${open ? 'nav__hamburger-icon--open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav__mobile-menu">
          <a href="/#work" onClick={() => setOpen(false)}>Work</a>
          <a href="/#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="mailto:jxmcfarland@gmail.com" onClick={() => setOpen(false)}>Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="nav__cta">Resume</a>
        </div>
      )}
    </header>
  )
}