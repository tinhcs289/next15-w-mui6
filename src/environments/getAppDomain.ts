export default function getAppDomain(): string {
  const value = process?.env?.NEXT_PUBLIC_APP_DOMAIN || "";

  if (!!value) return value;

  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  return "";
}