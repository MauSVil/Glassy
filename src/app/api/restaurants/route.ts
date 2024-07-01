import { getRestaurants } from "@/lib/mongo/actions/restaurants";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const restaurants = await getRestaurants({});
    return NextResponse.json(restaurants);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}