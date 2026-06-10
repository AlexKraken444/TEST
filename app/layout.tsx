import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEST — Скоро в продаже",
  description:
    "TEST — официальный сайт игры. Дата выхода: 30 июня в 20:00 МСК. Смотри трейлер и следи за обратным отсчётом.",
  openGraph: {
    title: "TEST — Скоро в продаже",
    description: "Дата выхода: 30 июня, 20:00 МСК.",
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
        {children}
      </body>
    </html>
  );
}
