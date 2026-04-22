'use client';

import Image from 'next/image';
import { Reveal } from '../components/Reveal';
import { siteContent } from '../content/site';
import { siteDictionary } from '../content/siteDictionary';
import { useSiteSettings } from '../components/SiteSettingsProvider';

export default function HomePage() {
  const { language } = useSiteSettings();
  const copy = siteDictionary[language].home;

  return (
    <main className="page-shell">
      <section className="hero">
        <Reveal className="hero-copy" delay={40}>
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
        </Reveal>

        <Reveal className="hero-visual" delay={140}>
          <div className="hero-phone-stage">
            <div className="hero-ambient-ring" />
            <div className="hero-stage-grid" />
            <div className="hero-beam" />
            <div className="hero-ghost-phone hero-ghost-phone-left" aria-hidden="true">
              <div className="hero-ghost-phone-frame">
                <Image
                  src="/app-preview/ecran-ape.jpeg"
                  alt=""
                  width={768}
                  height={1664}
                  sizes="220px"
                  className="hero-ghost-phone-image"
                />
              </div>
            </div>
            <div className="hero-ghost-phone hero-ghost-phone-right" aria-hidden="true">
              <div className="hero-ghost-phone-frame">
                <Image
                  src="/app-preview/ecran-comunitate-chat.jpeg"
                  alt=""
                  width={768}
                  height={1664}
                  sizes="220px"
                  className="hero-ghost-phone-image"
                />
              </div>
            </div>
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
        </Reveal>
      </section>

      <section className="stats-strip">
        {copy.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={80 + index * 70}>
            <article className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          </Reveal>
        ))}
      </section>

      <Reveal className="preview-section" delay={60}>
        <section id="preview">
          <div className="section-heading">
            <span className="section-tag">{copy.previewTag}</span>
            <h2>{copy.previewTitle}</h2>
            <p>{copy.previewText}</p>
          </div>

          <div className="gallery-grid">
            {copy.gallery.map((item, index) => (
              <Reveal key={item.title} delay={100 + index * 55}>
                <article className="gallery-card">
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
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <section className="section-grid" id="features">
        {copy.featureColumns.map((feature, index) => (
          <Reveal key={feature.title} delay={70 + index * 70}>
            <article className="feature-card">
              <p>{feature.title}</p>
              <h2>{feature.text}</h2>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="story-grid">
        {copy.sections.map((section, index) => (
          <Reveal key={section.title} delay={70 + index * 80}>
            <article className="story-card">
              <span>{section.eyebrow}</span>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <Reveal className="install-section" delay={80}>
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
      </Reveal>

      <section className="info-grid">
        <Reveal delay={70}>
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
        </Reveal>

        <Reveal delay={130}>
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
        </Reveal>
      </section>

      <Reveal className="contact-panel" delay={80}>
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
      </Reveal>

      <Reveal className="bottom-cta" delay={90}>
        <div>
          <span className="section-tag">{copy.launchTag}</span>
          <h2>{copy.bottomTitle}</h2>
          <p>{copy.bottomText}</p>
        </div>
        <a className="secondary-cta strong" href={siteContent.apkUrl} target="_blank" rel="noreferrer">
          {copy.bottomCta}
        </a>
      </Reveal>
    </main>
  );
}
