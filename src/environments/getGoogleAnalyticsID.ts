export default function getGoogleAnalyticsID(): string {
  return process?.env?.NEXT_PUBLIC_GOOGLE_GAID || "";
}