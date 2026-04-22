'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type SiteLanguage = 'ro' | 'en';
export type SiteTheme = 'dark' | 'light';

type SiteSettingsContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  theme: SiteTheme;
  setTheme: (theme: SiteTheme) => void;
  toggleTheme: () => void;
};

const STORAGE_KEYS = {
  language: 'fishtracker-site-language',
  theme: 'fishtracker-site-theme',
} as const;

const SiteSettingsContext = createContext<SiteSettingsContextValue | null>(null);

function applyTheme(theme: SiteTheme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function applyLanguage(language: SiteLanguage) {
  document.documentElement.lang = language;
}

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<SiteLanguage>('ro');
  const [theme, setThemeState] = useState<SiteTheme>('dark');

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEYS.language);
    const storedTheme = window.localStorage.getItem(STORAGE_KEYS.theme);

    if (storedLanguage === 'ro' || storedLanguage === 'en') {
      setLanguageState(storedLanguage);
      applyLanguage(storedLanguage);
    } else {
      applyLanguage('ro');
    }

    if (storedTheme === 'dark' || storedTheme === 'light') {
      setThemeState(storedTheme);
      applyTheme(storedTheme);
      return;
    }

    const nextTheme: SiteTheme = 'dark';
    setThemeState(nextTheme);
    applyTheme(nextTheme);
  }, []);

  const setLanguage = (nextLanguage: SiteLanguage) => {
    setLanguageState(nextLanguage);
    applyLanguage(nextLanguage);
    window.localStorage.setItem(STORAGE_KEYS.language, nextLanguage);
  };

  const setTheme = (nextTheme: SiteTheme) => {
    setThemeState(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const value = useMemo(
    () => ({ language, setLanguage, theme, setTheme, toggleTheme }),
    [language, theme],
  );

  return <SiteSettingsContext.Provider value={value}>{children}</SiteSettingsContext.Provider>;
}

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);

  if (!context) {
    throw new Error('useSiteSettings must be used within SiteSettingsProvider');
  }

  return context;
}