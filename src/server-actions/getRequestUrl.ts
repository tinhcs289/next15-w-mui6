"use server";

import { headers } from "next/headers";

export default async function getRequestUrl() {
  const headersList = await headers()
  const currentUrl = headersList.get('x-url') || "";
  return currentUrl;
}