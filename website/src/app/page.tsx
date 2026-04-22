'use client';

import Image from 'next/image';
import { siteContent } from '../content/site';
import { siteDictionary } from '../content/siteDictionary';
import { useSiteSettings } from '../components/SiteSettingsProvider';

export default function HomePage() {
  const { language } = useSiteSettings();
  const copy = siteDictionary[language].home;

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow-row">
            <span className="pill">{copy.status}</span>
            <span className="muted-pill">{copy.version}</span>
          </div>
          <p className="microcopy">{copy.microcopy}</p>
          <h1>{siteContent.appName}</h1>
          <p className="lead">{copy.tagline}</p>
          <p className="body-copy">{copy.description}</p>
          <div className="cta-row">
            <a className="primary-cta" href={siteContent.apkUrl} target="_blank" rel="noreferrer">
              {copy.apkLabel}
            </a>
            <a className="secondary-cta" href="#features">
              {copy.heroSecondaryCta}
            </a>
          </div>
          <ul className="highlights">
            {copy.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-phone-stage">
            <div className="hero-ambient-ring" />
            <div className="hero-phone-frame">
              <div className="hero-phone-notch" />
              <div className="hero-phone-screen">
                <Image
                  src="/app-preview/prima-pagina.jpeg"
                  alt={copy.previewTag + ' FishTracker'}
                  width={971}
                  height={2048}
                  sizes="(max-width: 720px) 82vw, 390px"
                  className="hero-phone-image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        {copy.stats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className="preview-section" id="preview">
        <div className="section-heading">
          <span className="section-tag">{copy.previewTag}</span>
          <h2>{copy.previewTitle}</h2>
          <p>{copy.previewText}</p>
        </div>

        <div className="gallery-grid">
          {copy.gallery.map((item) => (
            <article key={item.title} className="gallery-card">
              <div className="gallery-shot">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={768}
                  height={1664}
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="gallery-shot-image"
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="gallery-badges">
                {item.badges.map((badge) => (
                  <li key={badge}>{badge}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid" id="features">
        {copy.featureColumns.map((feature) => (
          <article key={feature.title} className="feature-card">
            <p>{feature.title}</p>
            <h2>{feature.text}</h2>
          </article>
        ))}
      </section>

      <section className="story-grid">
        {copy.sections.map((section) => (
          <article key={section.title} className="story-card">
            <span>{section.eyebrow}</span>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </article>
        ))}
      </section>

      <section className="install-section">
        <div className="install-copy">
          <span className="section-tag">{copy.installTag}</span>
          <h2>{copy.installTitle}</h2>
          <p>{copy.installText}</p>
          <a className="primary-cta" href={siteContent.apkUrl} target="_blank" rel="noreferrer">
            {copy.downloadNow}
          </a>
        </div>
        <ol className="steps-list">
          {copy.installSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="info-grid">
        <article className="faq-panel">
          <div className="section-heading compact">
            <span className="section-tag">FAQ</span>
            <h2>{copy.faqTitle}</h2>
          </div>
          <div className="faq-list">
            {copy.faqs.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </article>

        <article className="updates-panel">
          <div className="section-heading compact">
            <span className="section-tag">{copy.updatesTag}</span>
            <h2>{copy.updatesTitle}</h2>
          </div>
          <div className="release-list">
            {copy.releaseNotes.map((item) => (
              <section key={item.version} className="release-card">
                <p className="release-version">{item.version}</p>
                <h3>{item.title}</h3>
                <ul>
                  {item.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      </section>

      <section className="contact-panel">
        <div>
          <span className="section-tag">{copy.contactTag}</span>
          <h2>{copy.contactTitle}</h2>
          <p>{copy.contactText}</p>
        </div>
        <div className="contact-card">
          <span>{copy.emailLabel}</span>
          <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
          <p>{siteDictionary[language].contact.note}</p>
        </div>
      </section>

      <section className="bottom-cta">
        <div>
          <span className="section-tag">{copy.launchTag}</span>
          <h2>{copy.bottomTitle}</h2>
          <p>{copy.bottomText}</p>
        </div>
        <a className="secondary-cta strong" href={siteContent.apkUrl} target="_blank" rel="noreferrer">
          {copy.bottomCta}
        </a>
      </section>
    </main>
  );
}
