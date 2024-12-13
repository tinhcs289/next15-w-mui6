import { FONT_CLASS_NAMES } from "@/app/fonts";
import { STATIC_MEDIA } from "@/constants/media";
import getUserLocale from "@/server-actions/getUserLocale";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "this is page title",
    description: "this is meta-description",
  };
}

export default async function RootLayout({
  children,
} : {
  children: ReactNode;
}) {
  const locale = await getUserLocale();
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href={STATIC_MEDIA.favicon} sizes="any" />
      </head>
      <body className={`${FONT_CLASS_NAMES}`}>{children}</body>
    </html>
  );
}
