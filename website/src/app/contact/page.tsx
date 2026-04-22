'use client';

import { Reveal } from '../../components/Reveal';
import { siteContent } from '../../content/site';
import { siteDictionary } from '../../content/siteDictionary';
import { useSiteSettings } from '../../components/SiteSettingsProvider';
import { ContactForm } from './ContactForm';

export default function ContactPage() {
  const { language } = useSiteSettings();
  const copy = siteDictionary[language].contact;

  return (
    <main className="page-shell subpage-shell">
      <Reveal className="subpage-hero" delay={40}>
        <span className="section-tag">{copy.tag}</span>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
      </Reveal>

      <section className="subpage-grid contact-page-grid">
        <Reveal delay={70}>
          <ContactForm />
        </Reveal>

        <Reveal delay={130}>
        <article className="subpage-card contact-page-card">
          <span>{copy.emailLabel}</span>
          <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
          <p>{copy.note}</p>
        </article>
        </Reveal>
      </section>
    </main>
  );
}