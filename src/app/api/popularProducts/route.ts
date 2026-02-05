import { NextResponse } from "next/server";
import popularProducts from "@/entities/product/api/data/popularProducts.json";
export async function GET() {
    return NextResponse.json(popularProducts);
}
