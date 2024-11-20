import getGoogleAnalyticsID from "@/environments/getGoogleAnalyticsID";
import { GoogleAnalytics } from "@next/third-parties/google";

const GAID = getGoogleAnalyticsID();

export default function GoogleAnalysticElement() {
  return <GoogleAnalytics gaId={GAID} />
}