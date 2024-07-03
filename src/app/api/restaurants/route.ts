import { createRestaurant, getRestaurants } from "@/lib/mongo/actions/restaurants";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const userHeader = req.headers.get('auth-user');
    const user = userHeader ? JSON.parse(userHeader) : undefined;

    const restaurants = await getRestaurants({ owner: user.id });
    return NextResponse.json(restaurants);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const userHeader = req.headers.get('auth-user');
    const user = userHeader ? JSON.parse(userHeader) : undefined;

    const body = await req.json();
    body.owner = user.id;
    const restaurant = await createRestaurant(body);
    return NextResponse.json(restaurant);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}