import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/engine/types";
import { loadColorblindMode, loadLocale, saveColorblindMode, saveLocale } from "@/engine/storage";
import { STRINGS, type Strings } from "@/i18n/strings";

interface SettingsContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  colorblind: boolean;
  setColorblind: (enabled: boolean) => void;
  t: Strings;
  ready: boolean;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

const DEFAULT_LOCALE: Locale = "tr";

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [colorblind, setColorblindState] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const [storedLocale, storedColorblind] = await Promise.all([loadLocale(), loadColorblindMode()]);
      if (storedLocale) setLocaleState(storedLocale);
      setColorblindState(storedColorblind);
      setReady(true);
    })();
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    saveLocale(next);
  }, []);

  const setColorblind = useCallback((next: boolean) => {
    setColorblindState(next);
    saveColorblindMode(next);
  }, []);

  const value = useMemo<SettingsContextValue>(
    () => ({ locale, setLocale, colorblind, setColorblind, t: STRINGS[locale], ready }),
    [locale, setLocale, colorblind, setColorblind, ready]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
}
