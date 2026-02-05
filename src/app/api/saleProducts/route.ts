import { NextResponse } from "next/server";
import saleProducts from "@/entities/product/api/data/flashSalesProduct.json";
export async function GET() {
    return NextResponse.json(saleProducts);
}
