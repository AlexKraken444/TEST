"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LanguageProvider";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diff(targetMs: number, nowMs: number): Parts {
  const total = Math.max(0, targetMs - nowMs);
  const days = Math.floor(total / 86_400_000);
  const hours = Math.floor((total % 86_400_000) / 3_600_000);
  const minutes = Math.floor((total % 3_600_000) / 60_000);
  const seconds = Math.floor((total % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

export default function Countdown({ targetIso }: { targetIso: string }) {
  const { t } = useLang();
  const targetMs = new Date(targetIso).getTime();
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const tick = () => setParts(diff(targetMs, Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const released =
    parts !== null &&
    parts.days === 0 &&
    parts.hours === 0 &&
    parts.minutes === 0 &&
    parts.seconds === 0;

  if (released) {
    return (
      <div className="glass mx-auto max-w-2xl rounded-2xl px-8 py-10 text-center shadow-glow-lg">
        <p className="text-xl uppercase tracking-[0.4em] text-cyan-200">
          {t("released")}
        </p>
        <p className="mt-3 text-4xl font-bold text-white glow-text">
          {t("playNow")}
        </p>
      </div>
    );
  }

  const cells: Array<{ label: string; value: number | null }> = [
    { label: t("days"), value: parts?.days ?? null },
    { label: t("hours"), value: parts?.hours ?? null },
    { label: t("minutes"), value: parts?.minutes ?? null },
    { label: t("seconds"), value: parts?.seconds ?? null },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
      {cells.map((c) => (
        <div
          key={c.label}
          className="glass relative overflow-hidden rounded-2xl px-3 py-6 sm:py-8 text-center shadow-glow"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
          <div
            className="font-display tabular-nums text-5xl sm:text-6xl md:text-7xl font-bold text-white glow-text"
            suppressHydrationWarning
          >
            {c.value === null ? "—" : String(c.value).padStart(2, "0")}
          </div>
          <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.4em] text-cyan-200/80">
            {c.label}
          </div>
        </div>
      ))}
    </div>
  );
}
