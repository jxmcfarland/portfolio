import { useState, useEffect, useRef, useCallback } from 'react'
import { caseStudies, workExamples } from '../data/caseStudies'
import OrgChart from '../components/OrgChart'

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
  return (
    <section className="hero section" id="hero">
      <div className="container">
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
    </section>
  )
}

function Work() {
  const [activeStudy, setActiveStudy] = useState(null)
  return (
    <section className="work section" id="work">
      <div className="container">
        <p className="label">Selected Work</p>
        <h2 className="section__heading">Case Studies</h2>
        <div className="cases">
          {caseStudies.map(c => (
            <CaseCard key={c.id} study={c} onClick={() => setActiveStudy(c)} />
          ))}
        </div>
        <h2 className="section__heading section__heading--spaced">Work Examples</h2>
        <div className="work-grid">
          {workExamples.map(w => (
            <div key={w.id} className="work-card">
              <div className="work-card__img" aria-hidden="true" />
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
        <CaseStudyDrawer study={activeStudy} onClose={() => setActiveStudy(null)} />
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
        <div className="cs-images">
          {sub.images.map((img, k) => (
            <button key={k} className="cs-image-btn" onClick={() => setLightbox(img)} aria-label={`View larger: ${img.alt}`}>
              <img src={img.src} alt={img.alt} className="cs-image" />
              <span className="cs-image-hint">Click to enlarge</span>
            </button>
          ))}
        </div>
      )}
      {sub.showOrgChart && <OrgChart />}
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
          {sub.bullets && (
            <ul className="cs-bullets">
              {sub.bullets.map((b, k) => <li key={k}>{b}</li>)}
            </ul>
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

function CaseStudyDrawer({ study, onClose }) {
  const closeRef = useRef(null)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="drawer" role="dialog" aria-modal="true" aria-label={study.title}>
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
      items: ['Figma and FigJam', 'Prototyping', 'Design systems', 'Accessibility (WCAG)'],
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
          I am currently open to Senior Director and VP-level UX opportunities.
          If you are building something worth using, I would love to hear about it.
        </p>
        <a href="mailto:jxmcfarland@gmail.com" className="btn">Say hello</a>
      </div>
    </section>
  )
}
