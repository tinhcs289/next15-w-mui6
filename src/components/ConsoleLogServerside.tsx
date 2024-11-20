"use server";

import { headers } from "next/headers";

export default async function ConsoleLogServerside() {
  const headerList =  await headers();
  const requestUrl =  headerList.get("x-url");
  console.log({ requestUrl });
  return <></>;
}