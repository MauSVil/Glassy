import { getUsers } from "@/lib/mongo/actions/users";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { cookies } from "next/headers";

dotenv.config();

export const POST = async (req: Request, res: Response) => {
  const body = await req.json();
  const { email, password } = body;
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }
  try {
    const users = await getUsers({ email });
    const user = users?.[0];
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }
    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '365d' });

    cookies().set('token', token);

    return NextResponse.json({ token });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};