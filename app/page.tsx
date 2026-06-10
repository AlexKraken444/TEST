import Image from "next/image";
import Countdown from "@/components/Countdown";
import TrailerEmbed from "@/components/TrailerEmbed";

// 30 июня 2026, 20:00 МСК (UTC+3) → 17:00 UTC
const RELEASE_ISO = "2026-06-30T17:00:00Z";
const TRAILER_ID = "hPT61SNcBrQ";

export default function HomePage() {
  return (
    <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center px-6 py-12">
      <section className="flex flex-col items-center text-center">
        <div className="relative animate-float">
          <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-cyanglow/30 blur-3xl" />
          <Image
            src="/logo.png"
            alt="TEST"
            width={520}
            height={520}
            priority
            className="drop-shadow-[0_0_45px_rgba(0,212,255,0.55)] w-[280px] sm:w-[360px] md:w-[440px] h-auto"
          />
        </div>

        <p className="mt-4 text-sm uppercase tracking-[0.5em] text-cyan-300/80">
          Coming soon
        </p>

        <h1 className="sr-only">TEST — официальный сайт игры</h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-cyan-50/80">
          Релиз — <span className="text-white font-semibold">30 июня, 20:00 МСК</span>.
          До старта осталось:
        </p>
      </section>

      <section className="mt-10 w-full">
        <Countdown targetIso={RELEASE_ISO} />
      </section>

      <section className="mt-16 w-full">
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/60" />
          <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-200/90">
            Release date trailer
          </h2>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/60" />
        </div>
        <TrailerEmbed videoId={TRAILER_ID} />
      </section>

      <footer className="mt-20 mb-2 text-center text-xs text-cyan-100/40">
        <p>© {new Date().getFullYear()} TEST. Все права защищены.</p>
      </footer>
    </main>
  );
}
