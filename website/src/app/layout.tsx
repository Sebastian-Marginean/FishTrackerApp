import type { Metadata } from 'next';
import { Space_Grotesk, Fraunces } from 'next/font/google';
import './globals.css';
import { siteContent } from '../content/site';
import { SiteSettingsProvider } from '../components/SiteSettingsProvider';
import { SiteShell } from '../components/SiteShell';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const accent = Fraunces({
  subsets: ['latin'],
  variable: '--font-accent',
});

export const metadata: Metadata = {
  title: 'FishTracker | Aplicatie pentru pescari',
  description:
    'Landing page oficial pentru FishTracker, cu prezentare, highlight-uri si link de download pentru APK Android.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body suppressHydrationWarning className={`${display.variable} ${accent.variable}`}>
        <SiteSettingsProvider>
          <SiteShell>{children}</SiteShell>
        </SiteSettingsProvider>
      </body>
    </html>
  );
}
