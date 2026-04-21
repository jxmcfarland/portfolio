import { useState, useEffect, useRef, useCallback } from 'react'
import { caseStudies, workExamples } from '../data/caseStudies'
import OrgChart from '../components/OrgChart'
import AIToolsCollage from '../components/AIToolsCollage'

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Skills />
      <Contact />
    </>
  )
}

function Hero() {
  const stats = [
    { value: '15+', label: 'Years of UX Leadership', bg: '#FDF3F1' },
    { value: '3', label: 'Head of UX at 3 B2B-B2C SaaS Companies', bg: '#FAE8E4' },
    { value: '5+', label: 'Led & Grew Teams of 5+ Designers', bg: '#F7DCD6' },
    { value: '2', label: 'UX Organizations Built from the Ground Up', bg: '#F3CFC8' },
  ]

  return (
    <section className="hero section" id="hero">
      <div className="container hero__layout">
        <div className="hero__left">
          <p className="label">UX and Product Design Leadership</p>
          <h1 className="hero__headline">
            Designing products<br />people actually use.
          </h1>
          <p className="hero__sub">
            I am an experienced UX leader with a proven track record of building
            high-performing teams, scaling systems, and aligning UX with both
            product and business goals. A trusted advisor to executives, with deep
            expertise in design systems, accessibility, research ops, and
            AI-driven innovation across SaaS platforms.
          </p>
          <a href="#work" className="btn">View my work</a>
        </div>
        <div className="hero__right">
          <div className="hero__stats">
            {stats.map((s, i) => (
              <div key={i} className="hero__stat" style={{ background: s.bg }}>
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Work() {
  const [activeStudy, setActiveStudy] = useState(null)
  const [activeWork, setActiveWork] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  const openStudy = (study) => {
    setScrollY(window.scrollY)
    setActiveStudy(study)
  }

  const openWork = (work) => {
    setScrollY(window.scrollY)
    setActiveWork(work)
  }

  return (
    <section className="work section" id="work">
      <div className="container">
        <p className="label">Selected Work</p>
        <h2 className="section__heading">Case Studies</h2>
        <div className="cases">
          {caseStudies.map(c => (
            <CaseCard key={c.id} study={c} onClick={() => openStudy(c)} />
          ))}
        </div>
        <h2 className="section__heading section__heading--spaced">Work Examples</h2>
        <div className="work-grid">
          {workExamples.map(w => (
            <div
              key={w.id}
              className="work-card"
              onClick={() => openWork(w)}
              role="button"
              tabIndex={0}
              aria-label={`View work example: ${w.title}`}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') openWork(w) }}
            >
              {w.cardImage ? (
                <img src={w.cardImage} alt={`${w.title} preview`} className="work-card__img work-card__img--photo" />
              ) : (
                <div className="work-card__img" aria-hidden="true" />
              )}
              <div className="work-card__body">
                <h3 className="work-card__title">{w.title}</h3>
                <p className="work-card__role">{w.role}</p>
                <p className="work-card__desc">{w.description}</p>
                <div className="work-card__tags">
                  {w.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeStudy && (
        <CaseStudyDrawer
          study={activeStudy}
          scrollY={scrollY}
          onClose={() => setActiveStudy(null)}
        />
      )}
      {activeWork && (
        <WorkExampleDrawer
          work={activeWork}
          scrollY={scrollY}
          onClose={() => setActiveWork(null)}
        />
      )}
    </section>
  )
}

function CaseCard({ study, onClick }) {
  return (
    <article
      className="case-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View case study: ${study.title}`}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
    >
      {study.cardImage ? (
        <img src={study.cardImage} alt={`${study.title} preview`} className="case-card__img case-card__img--photo" />
      ) : (
        <div className="case-card__img" aria-hidden="true" />
      )}
      <div className="case-card__body">
        <p className="label">{study.label}</p>
        <h3 className="case-card__title">{study.title}</h3>
        <p className="case-card__desc">{study.summary}</p>
        <div className="case-card__tags" aria-label="Topics">
          {study.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </article>
  )
}

function SubSection({ sub, setLightbox }) {
  return (
    <div className="cs-subsection">
      {sub.heading && <h4 className="cs-subsection-title">{sub.heading}</h4>}
      {sub.content && <p>{sub.content}</p>}
      {sub.content2 && <p>{sub.content2}</p>}
      {sub.bullets && (
        <div className="cs-bullets-quotes">
          <ul className="cs-bullets">
            {sub.bullets.map((b, k) => <li key={k}>{b}</li>)}
          </ul>
          {sub.quotes && (
            <div className="cs-quotes">
                {sub.quotes.map((q, k) => (
                    <div key={k} className="cs-quote">
                        <span className="cs-quote__mark">&ldquo;</span>
                        <span className="cs-quote__text">{q}</span>
                    </div>
                ))}
            </div>
        )}
        </div>
      )}
      {sub.images && (
        <div className={`cs-images${sub.stackImages ? ' cs-images--stacked' : ''}`}>
          {sub.images.map((img, k) => (
            <button key={k} className="cs-image-btn" onClick={() => setLightbox(img)} aria-label={`View larger: ${img.alt}`}>
              <img src={img.src} alt={img.alt} className="cs-image" />
              <span className="cs-image-hint">Click to enlarge</span>
            </button>
          ))}
        </div>
      )}
      {sub.showOrgChart && <OrgChart />}
      {sub.showAITools && <AIToolsCollage />}
    </div>
  )
}

function WhatsNextCard({ items }) {
  const iconMap = {
    metadata: { emoji: '🤖', bg: '#EEF0FA', color: '#3949A3' },
    portals:  { emoji: '⚡', bg: '#E8F5E9', color: '#2E7D32' },
    ops:      { emoji: '🔧', bg: '#FFF3E0', color: '#E65100' },
  }

  return (
    <div className="cs-metrics-card cs-whatsnext-card">
      <div className="cs-whatsnext">
        {items.map((item, k) => {
          const icon = iconMap[item.icon] || iconMap.metadata
          return (
            <div key={k} className="cs-whatsnext__item">
              <div
                className="cs-whatsnext__icon"
                style={{ background: icon.bg, color: icon.color }}
              >
                {icon.emoji}
              </div>
              <div className="cs-whatsnext__body">
                <p className="cs-whatsnext__title">{item.title}</p>
                <p className="cs-whatsnext__desc">{item.desc}</p>
                <span className="cs-whatsnext__timeline">{item.timeline}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function MetricsCard({ metrics }) {
  return (
    <div className="cs-metrics-card">
      <p className="cs-metrics-card__title">Impact Summary</p>
      <div className="cs-metrics">
        {metrics.map((m, j) => (
          <div key={j} className="cs-metric">
            <div className="cs-metric__value-row">
              <span className={`cs-metric__trend cs-metric__trend--${m.trend}`}>
                {m.trend === 'down' ? '\u2193' : '\u2191'}
              </span>
              <span className="cs-metric__value">{m.value}</span>
            </div>
            <span className="cs-metric__label">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TwoColumnSection({ section, setLightbox }) {
  const fullWidthSubs = section.subsections ? section.subsections.filter(s => s.fullWidth) : []
  const columnSubs = section.subsections ? section.subsections.filter(s => !s.fullWidth) : []
  const whatsNextSub = columnSubs.find(s => s.whatsNext)

  return (
    <>
      {fullWidthSubs.map((sub, j) => (
        <div key={j} className="cs-subsection">
          {sub.heading && <h4 className="cs-subsection-title">{sub.heading}</h4>}
          {sub.content && <p>{sub.content}</p>}
          {sub.content2 && <p>{sub.content2}</p>}
          {sub.bullets && (
            <ul className="cs-bullets">
              {sub.bullets.map((b, k) => <li key={k}>{b}</li>)}
            </ul>
          )}
          {sub.images && (
            <div className={`cs-images${sub.stackImages ? ' cs-images--stacked' : ''}`}>
              {sub.images.map((img, k) => (
                <button key={k} className="cs-image-btn" onClick={() => setLightbox(img)} aria-label={`View larger: ${img.alt}`}>
                  <img src={img.src} alt={img.alt} className="cs-image" />
                  <span className="cs-image-hint">Click to enlarge</span>
                </button>
              ))}
            </div>
          )}
          {sub.quotes && (
            <div className="cs-quotes">
              {sub.quotes.map((q, k) => (
                <div key={k} className="cs-quote">
                  <span className="cs-quote__mark">&ldquo;</span>
                  <span className="cs-quote__text">{q}</span>
                </div>
              ))}
            </div>
          )}
          {sub.imageQuote && (
            <div className="cs-image-quote">
              <button
                className="cs-image-btn"
                onClick={() => setLightbox(sub.imageQuote.image)}
                aria-label={`View larger: ${sub.imageQuote.image.alt}`}
              >
                <img src={sub.imageQuote.image.src} alt={sub.imageQuote.image.alt} className="cs-image" />
                <span className="cs-image-hint">Click to enlarge</span>
              </button>
              <div className="cs-quote">
                <span className="cs-quote__mark">&ldquo;</span>
                <span className="cs-quote__text">{sub.imageQuote.quote}</span>
              </div>
            </div>
          )}
          {sub.orgMetrics && (
            <div className="cs-org-metrics">
              {sub.orgMetrics.map((m, k) => (
                <div key={k} className="cs-org-metric">
                  <div className="cs-metric__value-row">
                    <span className={`cs-metric__trend cs-metric__trend--${m.trend}`}>
                      {m.trend === 'down' ? '\u2193' : '\u2191'}
                    </span>
                    <span className="cs-metric__value">{m.value}</span>
                  </div>
                  <span className="cs-metric__label">{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="cs-outcomes-layout">
        <div className="cs-outcomes-left">
          {columnSubs.map((sub, j) => (
            <SubSection key={j} sub={sub} setLightbox={setLightbox} />
          ))}
        </div>
        <div className="cs-outcomes-right">
          {section.metrics && <MetricsCard metrics={section.metrics} />}
          {whatsNextSub && <WhatsNextCard items={whatsNextSub.whatsNext} />}
        </div>
      </div>
    </>
  )
}

function CaseStudyDrawer({ study, scrollY, onClose }) {
  const closeRef = useRef(null)
  const [lightbox, setLightbox] = useState(null)
  const drawerRef = useRef(null)
  const touchStartX = useRef(null)
  const touchCurrentX = useRef(null)

  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.top = `-${scrollY}px`
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, behavior: 'instant' })
      })
    }
  }, [onClose, scrollY])

  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX
    touchCurrentX.current = e.touches[0].clientX
  }

  const handleTouchMove = e => {
    touchCurrentX.current = e.touches[0].clientX
    const delta = touchCurrentX.current - touchStartX.current
    if (delta > 0 && drawerRef.current) {
      drawerRef.current.style.transform = `translateX(${delta}px)`
      drawerRef.current.style.transition = 'none'
    }
  }

  const handleTouchEnd = () => {
    const delta = touchCurrentX.current - touchStartX.current
    if (drawerRef.current) {
      drawerRef.current.style.transition = ''
      drawerRef.current.style.transform = ''
    }
    if (delta > 80) {
      onClose()
    }
    touchStartX.current = null
    touchCurrentX.current = null
  }

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} aria-hidden="true" onTouchMove={e => e.preventDefault()} />
      <div
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-label={study.title}
        ref={drawerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="drawer__inner">
          <div className="drawer__header">
            <p className="label">{study.label}</p>
            <h2 className="cs-title">{study.title}</h2>
            <div className="cs-meta">
              <span>{study.role}</span>
              <span>{study.company}</span>
              <span>{study.year}</span>
            </div>
            <div className="cs-tags">
              {study.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          {study.heroImage ? (
            <img src={study.heroImage} alt={`${study.title} hero image`} className="cs-img-hero cs-img-hero--photo" />
          ) : (
            <div className="cs-img-hero" aria-hidden="true" />
          )}

          <div className="cs-body">
            {study.sections.map((section, i) => (
              <section key={i} className="cs-section">
                <h3 className="cs-section-title">{section.title}</h3>
                {section.content && <p>{section.content}</p>}
                {(section.metrics || section.hasLayout) ? (
                  <TwoColumnSection section={section} setLightbox={setLightbox} />
                ) : (
                  section.subsections && section.subsections.map((sub, j) => (
                    <SubSection key={j} sub={sub} setLightbox={setLightbox} />
                  ))
                )}
              </section>
            ))}
          </div>
        </div>

        <div className="drawer__footer">
          <button ref={closeRef} className="drawer__close btn" onClick={onClose}>Close</button>
        </div>
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  )
}

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image preview">
      <img src={src} alt={alt} className="lightbox-img" onClick={e => e.stopPropagation()} />
      <button className="lightbox-close btn" onClick={onClose}>Close</button>
    </div>
  )
}

function WorkExampleDrawer({ work, scrollY, onClose }) {
  const closeRef = useRef(null)
  const [lightbox, setLightbox] = useState(null)
  const drawerRef = useRef(null)
  const touchStartX = useRef(null)
  const touchCurrentX = useRef(null)

  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.top = `-${scrollY}px`
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, behavior: 'instant' })
      })
    }
  }, [onClose, scrollY])

  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX
    touchCurrentX.current = e.touches[0].clientX
  }

  const handleTouchMove = e => {
    touchCurrentX.current = e.touches[0].clientX
    const delta = touchCurrentX.current - touchStartX.current
    if (delta > 0 && drawerRef.current) {
      drawerRef.current.style.transform = `translateX(${delta}px)`
      drawerRef.current.style.transition = 'none'
    }
  }

  const handleTouchEnd = () => {
    const delta = touchCurrentX.current - touchStartX.current
    if (drawerRef.current) {
      drawerRef.current.style.transition = ''
      drawerRef.current.style.transform = ''
    }
    if (delta > 80) onClose()
    touchStartX.current = null
    touchCurrentX.current = null
  }

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} aria-hidden="true" onTouchMove={e => e.preventDefault()} />
      <div
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-label={work.title}
        ref={drawerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="drawer__inner">
          <div className="drawer__header">
            <p className="label">Work Example</p>
            <h2 className="cs-title">{work.title}</h2>
            <div className="cs-meta">
              <span>{work.role}</span>
              <span>{work.company}</span>
              <span>{work.year}</span>
            </div>
            <div className="cs-tags">
              {work.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          <div className="cs-body">
            {work.sections.map((section, i) => (
              <div key={i} className="cs-section">
                {section.title && <h3 className="cs-section-title">{section.title}</h3>}
                {section.content && <p>{section.content}</p>}
                {section.content2 && <p>{section.content2}</p>}
                {section.numbered && (
                  <ol className="cs-numbered">
                    {section.numbered.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ol>
                )}
                {section.images && (
                  <div className="cs-images">
                    {section.images.map((img, j) => (
                      <div key={j} className="cs-image-with-caption">
                        <button
                          className="cs-image-btn"
                          onClick={() => setLightbox(img)}
                          aria-label={`View larger: ${img.alt}`}
                        >
                          <img src={img.src} alt={img.alt} className="cs-image" />
                          <span className="cs-image-hint">Click to enlarge</span>
                        </button>
                        {img.caption && <p className="cs-image-caption">{img.caption}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="drawer__footer">
          <button ref={closeRef} className="drawer__close btn" onClick={onClose}>Close</button>
        </div>
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  )
}

function Skills() {
  const areas = [
    {
      title: 'Design Leadership',
      items: ['Team building and mentorship', 'Design ops and systems', 'Cross-functional alignment', 'Executive communication'],
    },
    {
      title: 'UX Practice',
      items: ['User research and synthesis', 'Journey mapping', 'Interaction design', 'Usability testing'],
    },
    {
      title: 'Product Thinking',
      items: ['Zero-to-one product strategy', 'Roadmap influence', 'Metrics and success framing', 'Stakeholder facilitation'],
    },
    {
      title: 'Tools and Craft',
      items: ['Figma, Claude, Lovable', 'Prototyping', 'Design systems', 'Accessibility (WCAG)'],
    },
  ]

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <p className="label">Capabilities</p>
        <h2 className="section__heading">What I bring</h2>
        <div className="skills__grid">
          {areas.map(a => (
            <div key={a.title} className="skill-group">
              <h3 className="skill-group__title">{a.title}</h3>
              <ul className="skill-group__list">
                {a.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <p className="label">Get in touch</p>
        <h2 className="section__heading">Lets talk.</h2>
        <p className="contact__sub">
          I am currently open to Senior Manager and Director-level UX opportunities.<br></br>
          If you are building something worth using, I would love to hear about it.
        </p>
        <a href="mailto:jxmcfarland@gmail.com" className="btn">Say hello</a>
      </div>
    </section>
  )
}
