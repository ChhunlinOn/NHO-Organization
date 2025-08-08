"use client";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Example: Protect /api/secure/*
  if (req.nextUrl.pathname.startsWith("/api/secure")) {
    const token = req.headers.get("authorization");

    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/secure/:path*"],
};
