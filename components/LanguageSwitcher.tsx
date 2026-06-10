"use client";

import { useLang, type Lang } from "./LanguageProvider";

const OPTIONS: Array<{ code: Lang; label: string }> = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        role="group"
        aria-label={t("languageLabel")}
        className="glass flex items-center gap-1 rounded-full p-1 shadow-glow"
      >
        {OPTIONS.map((o) => {
          const active = lang === o.code;
          return (
            <button
              key={o.code}
              type="button"
              onClick={() => setLang(o.code)}
              aria-pressed={active}
              className={
                "px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest transition " +
                (active
                  ? "bg-cyan-400 text-slate-900 shadow-glow"
                  : "text-cyan-100/70 hover:text-white hover:bg-white/5")
              }
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
