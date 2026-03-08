import { NextResponse } from "next/server";
import allProducts from "@/entities/product/api/data/allProducts.json";

export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> },
) {
    const { id } = await context.params;

    // Собираем все товары в один массив
    const products = Object.values(allProducts.categories).flat(); // [laprops: [...{}], phones: [...{}]].flat() => [{}, {}, {}]

    const product = products.find((p) => p.id === id);

    if (!product) {
        return NextResponse.json(
            { error: "Product not found" },
            { status: 404 },
        );
    }

    return NextResponse.json(product);
}
