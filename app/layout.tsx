import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "TEST — coming soon",
  description:
    "TEST — official game site. Release: June 30, 20:00 MSK. Watch the trailer and follow the countdown.",
  openGraph: {
    title: "TEST — coming soon",
    description: "Release: June 30, 20:00 MSK.",
    images: ["/logo.png"],
    type: "website",
  },
  icons: { icon: "/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#00d4ff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <div className="starfield" aria-hidden />
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
