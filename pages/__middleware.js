import { NextResponse } from "next/server";

export function middleware(req) {
  const cookies = req.cookies;
  const url = req.nextUrl;
  console.log(cookies, url);

  if (url.href === "/login") {
    if (cookies.token) {
      return NextResponse.redirect("/");
    }
  }
  else {
    if (!cookies.token) {
      return NextResponse.redirect("/login");
    }
  }
  return NextResponse.next();
}