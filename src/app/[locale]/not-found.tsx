import getUserLocale from "@/server-actions/getUserLocale";
import NotFoundView from "@/views/NotFoundView";

export default async function LocaleNotFound() {
  const locale = await getUserLocale();
  return (
    <NotFoundView locale={locale} />
  );
}