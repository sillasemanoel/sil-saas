import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "@/lib/get-url";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authjs.session-token");
  const pathname = request.nextUrl.pathname;

  const protectedRoutes = ["/app"];
  const validRoutes = [
    "/",
    "/blog",
    "/help",
    "/pricing",
    "/auth",
    "/app",
    "/settings",
    "/settings/billing",
  ];

  console.log({
    token: token?.value,
    pathname,
  });

  if (pathname === "/auth" && token) {
    return NextResponse.redirect(new URL(getUrl("/app")));
  }

  if (protectedRoutes.some((route) => pathname.includes(route)) && !token) {
    return NextResponse.redirect(new URL(getUrl("/auth")));
  }

  if (!validRoutes.includes(pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL(getUrl("/")));
    } else {
      return NextResponse.redirect(new URL(getUrl("/app")));
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
