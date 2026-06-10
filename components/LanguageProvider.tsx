"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ru" | "en";

const translations = {
  ru: {
    comingSoon: "Coming soon",
    subtitle: "Релиз — ",
    subtitleDate: "30 июня, 20:00 МСК",
    subtitleTail: ". До выхода игры осталось:",
    days: "Дней",
    hours: "Часов",
    minutes: "Минут",
    seconds: "Секунд",
    trailerHeader: "Release date trailer",
    released: "Игра вышла",
    playNow: "Играть прямо сейчас",
    srTitle: "TEST — официальный сайт игры",
    languageLabel: "Язык",
  },
  en: {
    comingSoon: "Coming soon",
    subtitle: "Release — ",
    subtitleDate: "June 30, 20:00 MSK",
    subtitleTail: ". Time until launch:",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    trailerHeader: "Release date trailer",
    released: "Out now",
    playNow: "Play now",
    srTitle: "TEST — official game site",
    languageLabel: "Language",
  },
} as const;

export type TKey = keyof (typeof translations)["ru"];

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TKey) => string;
};

const LanguageContext = createContext<Ctx>({
  lang: "ru",
  setLang: () => {},
  t: (k) => translations.ru[k],
});

const STORAGE_KEY = "test-site-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "ru" || stored === "en") {
        setLangState(stored);
        return;
      }
      const nav = navigator.language?.toLowerCase() ?? "";
      if (!nav.startsWith("ru")) setLangState("en");
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const t = useCallback((key: TKey) => translations[lang][key], [lang]);

  const value = useMemo<Ctx>(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
