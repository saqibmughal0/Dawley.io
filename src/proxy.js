// src/proxy.js
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// Protect all routes except Next.js static files
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
