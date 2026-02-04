import { NextResponse } from "next/server";
import products from "@/entities/product/api/data/products.json";
export async function GET() {
    return NextResponse.json(products);
}
