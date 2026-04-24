import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host");

  const isMaintenance = true; // 👈 turn ON/OFF here

  if (isMaintenance && hostname?.includes("tropicalceylontravels.com")) {
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!maintenance).*)",
};