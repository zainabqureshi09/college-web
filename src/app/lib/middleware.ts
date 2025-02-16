import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("__session"); // Firebase stores session here
  const isAuthenticated = !!token;

  // Protected routes
  const protectedRoutes = ["/dashboard", "/profile"];

  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = { matcher: ["/dashboard", "/profile"] };
