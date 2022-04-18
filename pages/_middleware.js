import { NextResponse } from "next/server";

export function middleware(req) {
  const { token } = req.cookies;
  const url = req.url;

  if (url === "/login") {
    if (token) {
      return NextResponse.redirect("/");
    }
  } else {
    if (!token) {
      console.log('masuk sini');
      // return NextResponse.redirect("/login");
    }
  }
  return NextResponse.next();
}
