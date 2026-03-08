import { NextResponse } from "next/server";
import saleProducts from "@/entities/product/api/data/flashSalesProduct.json";

export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> },
) {
    const { id } = await context.params;
    console.log("saleProductsSSSSSSS:", saleProducts);

    const product = saleProducts.find((p) => p.id === id);

    if (!product) {
        return NextResponse.json(
            { error: "Product not found" },
            { status: 404 },
        );
    }

    return NextResponse.json(product);
}
