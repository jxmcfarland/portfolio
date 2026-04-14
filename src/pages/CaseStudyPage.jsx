import { useParams, Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudyPage() {
  const { slug } = useParams()
  const study = caseStudies.find(c => c.slug === slug)

  if (!study) {
    return (
      <div className="container section">
        <p>Case study not found.</p>
        <Link to="/">Back to home</Link>
      </div>
    )
  }

  return (
    <main className="cs-page">
      <div className="container">
        <Link to="/" className="cs-back">Back to work</Link>

        <div className="cs-header">
          <p className="label">{study.label}</p>
          <h1 className="cs-title">{study.title}</h1>
          <div className="cs-meta">
            <span>{study.role}</span>
            <span>{study.company}</span>
            <span>{study.year}</span>
          </div>
          <div className="cs-tags">
            {study.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>

        <div className="cs-img-hero" aria-hidden="true" />

        <div className="cs-body">
          <section className="cs-section">
            <h2 className="cs-section-title">The Problem</h2>
            <p>{study.problem}</p>
          </section>
          <section className="cs-section">
            <h2 className="cs-section-title">The Approach</h2>
            <p>{study.approach}</p>
          </section>
          <section className="cs-section">
            <h2 className="cs-section-title">The Outcome</h2>
            <p>{study.outcome}</p>
          </section>
        </div>
      </div>
    </main>
  )
}