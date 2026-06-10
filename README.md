# TEST — официальный сайт игры

Лендинг для игры **TEST** на Next.js 15 (App Router) + Tailwind CSS.

## Что внутри
- Главная страница с логотипом, обратным отсчётом до **30 июня, 20:00 МСК (UTC+3)** и встроенным трейлером с YouTube.
- Анимированный фон со «звёздным» полем и неоновое голубое свечение в духе логотипа.
- Полностью адаптивная вёрстка.

## Запуск локально

```bash
npm install
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
npm run start
```

## Структура

```
app/
  layout.tsx        корневой layout, метаданные
  page.tsx          главная (логотип, отсчёт, трейлер)
  globals.css       стили + анимированный фон
components/
  Countdown.tsx     обратный отсчёт (client-side, обновляется каждую секунду)
  TrailerEmbed.tsx  YouTube iframe (youtube-nocookie)
public/
  logo.png          логотип TEST
```

## Изменить дату релиза или ID видео

В [app/page.tsx](app/page.tsx):

```ts
const RELEASE_ISO = "2026-06-30T17:00:00Z"; // 20:00 МСК = 17:00 UTC
const TRAILER_ID = "hPT61SNcBrQ";
```
