'use server';

import { DEFAULT_LOCALE } from "@/constants/locale";
import { cookies } from 'next/headers';

export default async function getUserLocale(): Promise<string> {
  const cookieStore = await cookies();
  return cookieStore.get("NEXT_LOCALE")?.value || DEFAULT_LOCALE;
}