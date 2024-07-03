import { MiddlewareFactory } from "@/lib/types/MiddleFactory";
import { cookies } from "next/headers";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import * as jose from 'jose';

const jwtConfig = {
  secret: new TextEncoder().encode(process.env.JWT_SECRET),
};

export const backAuth: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    if (["/api/users", "/api/restaurants"].some((path) => pathname.startsWith(path))) {
      const token = cookies().get("token")?.value;
      if (!token) {
        return new NextResponse(JSON.stringify({ error: "No autorizado" }), {
          status: 401,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }

      try {
        const { payload } = await jose.jwtVerify(token, jwtConfig.secret);
        if (!payload) {
          throw new Error();
        }
        const response = NextResponse.next();
        response.headers.set('auth-user', JSON.stringify(payload));
        return response;
      } catch (error) {
        return new NextResponse(JSON.stringify({ error: "No autorizado" }), {
          status: 401,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
    }

    return next(request, _next);
  };
};
