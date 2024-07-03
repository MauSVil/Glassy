import { MiddlewareFactory } from "@/lib/types/MiddleFactory";
import { cookies } from "next/headers";
import {
  NextFetchEvent,
  NextRequest,
  NextResponse
} from "next/server";

export const frontAuth: MiddlewareFactory = (next) => {
  return async(request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    if (["/onboarding", "/dashboard", "/orders"]?.some((path) => pathname.startsWith(path))) {
      const token = cookies().get("token")?.value;
      if (!token) {
        const url = new URL(`/login`, request.url);
        return NextResponse.redirect(url);
      }
    }

    if (["/login", "/signup"]?.some((path) => pathname.startsWith(path))) {
      const token = cookies().get("token")?.value;
      if (token) {
        const url = new URL(`/dashboard`, request.url);
        return NextResponse.redirect(url);
      }
    }

    return next(request, _next);
  };
};