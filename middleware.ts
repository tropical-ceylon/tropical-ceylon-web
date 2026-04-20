import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isMaintenance = true; // 👈 CHANGE THIS

  if (isMaintenance) {
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  return NextResponse.next();
}

// Apply to all routes
export const config = {
  matcher: "/((?!maintenance).*)",
};