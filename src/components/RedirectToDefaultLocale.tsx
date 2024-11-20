"use client";

import { DEFAULT_LOCALE } from "@/i18n/config";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectToDefaultLocale() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${DEFAULT_LOCALE}/${pathname}`);
  }, [pathname, router]);

  return <></>;
}