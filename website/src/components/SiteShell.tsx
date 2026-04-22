'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { siteContent } from '../content/site';
import { siteDictionary } from '../content/siteDictionary';
import { useSiteSettings } from './SiteSettingsProvider';

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { language, setLanguage, theme, setTheme } = useSiteSettings();
  const copy = siteDictionary[language];
  const footerCopy =
    language === 'ro'
      ? {
          navigation: 'Navigare',
          access: 'Acces rapid',
          contact: 'Contact',
          rights: 'Toate drepturile rezervate.',
          availability: 'Disponibilitate',
        }
      : {
          navigation: 'Navigation',
          access: 'Quick access',
          contact: 'Contact',
          rights: 'All rights reserved.',
          availability: 'Availability',
        };
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const isNearTop = currentScrollY < 24;
      const scrollingDown = currentScrollY > lastScrollYRef.current;
      const delta = Math.abs(currentScrollY - lastScrollYRef.current);

      if (isNearTop) {
        setIsHeaderHidden(false);
      } else if (delta > 10) {
        setIsHeaderHidden(scrollingDown);
      }

      lastScrollYRef.current = currentScrollY;
    }

    lastScrollYRef.current = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-shell">
      <header className={`site-header${isHeaderHidden ? ' is-hidden' : ''}`}>
        <div className="page-shell site-header-inner">
          <Link href="/" className="site-brand">
            <span className="site-brand-mark" />
            <strong>{siteContent.appName}</strong>
          </Link>

          <nav className="site-nav" aria-label={copy.nav.home + ' / ' + copy.nav.preview + ' / ' + copy.nav.contact}>
            <Link href="/" className={pathname === '/' ? 'is-active' : undefined}>
              {copy.nav.home}
            </Link>
            <Link href="/preview" className={pathname === '/preview' ? 'is-active' : undefined}>
              {copy.nav.preview}
            </Link>
            <Link href="/contact" className={pathname === '/contact' ? 'is-active' : undefined}>
              {copy.nav.contact}
            </Link>
          </nav>

          <div className="site-header-actions">
            <div className="site-controls" aria-label="Site controls">
              <div className="site-control-group" role="group" aria-label={copy.controls.language}>
                <span className="site-control-label">{copy.controls.language}</span>
                <div className="segmented-control">
                  <SegmentedButton
                    active={language === 'ro'}
                    label="RO"
                    onClick={() => setLanguage('ro')}
                  />
                  <SegmentedButton
                    active={language === 'en'}
                    label="EN"
                    onClick={() => setLanguage('en')}
                  />
                </div>
              </div>

              <div className="site-control-group" role="group" aria-label={copy.controls.theme}>
                <span className="site-control-label">{copy.controls.theme}</span>
                <div className="segmented-control">
                  <SegmentedButton
                    active={theme === 'dark'}
                    label={copy.controls.dark}
                    onClick={() => setTheme('dark')}
                  />
                  <SegmentedButton
                    active={theme === 'light'}
                    label={copy.controls.light}
                    onClick={() => setTheme('light')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="page-shell site-footer-inner">
          <div className="site-footer-brand-block">
            <div className="site-footer-brand-line">
              <span className="site-brand-mark" />
              <strong>{siteContent.appName}</strong>
            </div>
            <div className="site-footer-meta">
              <span>{siteContent.version}</span>
              <span>{footerCopy.availability}: {siteContent.status}</span>
            </div>
            <p>{copy.footer.description}</p>
          </div>

          <div className="site-footer-column">
            <span className="site-footer-heading">{footerCopy.navigation}</span>
            <div className="site-footer-links">
              <Link href="/">{copy.nav.home}</Link>
              <Link href="/preview">{copy.nav.preview}</Link>
              <Link href="/contact">{copy.nav.contact}</Link>
            </div>
          </div>

          <div className="site-footer-column">
            <span className="site-footer-heading">{footerCopy.access}</span>
            <a className="site-footer-primary-link" href={siteContent.apkUrl} target="_blank" rel="noreferrer">
              {siteContent.apkLabel}
            </a>
            <span className="site-footer-heading site-footer-heading-secondary">{footerCopy.contact}</span>
            <a className="site-footer-email" href={`mailto:${siteContent.contact.email}`}>
              {siteContent.contact.email}
            </a>
          </div>
        </div>

        <div className="page-shell site-footer-bottom">
          <p>
           @ {new Date().getFullYear()} {siteContent.appName}. {footerCopy.rights}
          </p>
          <p>{copy.footer.description}</p>
        </div>
      </footer>
    </div>
  );
}

function SegmentedButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`segmented-button${active ? ' is-active' : ''}`}
      onClick={onClick}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}