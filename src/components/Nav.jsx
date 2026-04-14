export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="/" className="nav__logo">Jason McFarland</a>
        <nav className="nav__links">
          <a href="/#work">Work</a>
          <a href="/#skills">Skills</a>
          <a href="/#contact">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav__cta">Resume</a>
        </nav>
      </div>
    </header>
  )
}