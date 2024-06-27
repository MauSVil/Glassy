import { getUsers } from "@/lib/mongo/actions/users";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const users = await getUsers({});
    return NextResponse.json(users);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}