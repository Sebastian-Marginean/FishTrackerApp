'use client';

import Image from 'next/image';
import { siteDictionary } from '../../content/siteDictionary';
import { useSiteSettings } from '../../components/SiteSettingsProvider';

export default function PreviewPage() {
  const { language } = useSiteSettings();
  const copy = siteDictionary[language].preview;
  const steps = copy.steps as Array<{
    title: string;
    imageSrc: string;
    imageAlt: string;
    text: string;
  }>;

  return (
    <main className="page-shell subpage-shell">
      <section className="subpage-hero">
        <span className="section-tag">{copy.tag}</span>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
      </section>

      <section className="preview-flow-grid">
        {steps.map((step, index) => (
          <article key={step.title} className="subpage-card preview-step-card">
            <div className="preview-step-phone">
              <div className="preview-step-frame">
                <div className="preview-step-notch" />
                <div className="preview-step-screen">
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    width={768}
                    height={1664}
                    sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 360px"
                    className="preview-step-image"
                  />
                </div>
              </div>
            </div>

            <div className="preview-step-copy">
              <span className="preview-step-index">{copy.stepLabel} {index + 1}</span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}