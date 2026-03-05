import { NextResponse } from "next/server";
import redirects from "../redirects.json";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Check for redirects from redirects.json
  const redirect = redirects.find(r => r.source === pathname);
  if (redirect) {
    const url = request.nextUrl.clone();
    url.pathname = redirect.destination;
    return NextResponse.redirect(url, redirect.permanent ? 301 : 302);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
