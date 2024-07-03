import { NextRequest } from "next/server";
import * as jose from 'jose';

export interface RequestWithUser extends NextRequest {
  user?: string | jose.JWTPayload;
}