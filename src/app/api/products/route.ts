import { getProducts } from "@/lib/mongo/actions/products";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}