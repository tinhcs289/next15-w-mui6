import stackMiddleware from "@/helpers/stackMiddleware";
import withLocale from "@/middlewares/withLocale";
import withXUrl from "@/middlewares/withXUrl";

export default stackMiddleware([withXUrl, withLocale]);

export const config = {
  matcher: ["/((?!api|assets|_next/static|_next/image|favicon.ico).*)"],
};