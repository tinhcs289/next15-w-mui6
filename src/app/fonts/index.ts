import localFont from "next/font/local";

export const geistSans = localFont({
  src:  "./GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "./GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const FONT_CLASS_NAMES = [geistSans, geistMono].map(f => f.variable).join(' ');