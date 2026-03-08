import { NextResponse } from "next/server";
import allProducts from "@/entities/product/api/data/allProducts.json";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 3;
    const category = searchParams.get("category");

    let itemsArray = Object.values(allProducts.categories).flat(); // [laptops]

    // Фильтрация по категории
    if (category) {
        itemsArray = itemsArray.filter(
            (product: any) => product.category === category,
        );
    }

    console.log(
        "categories".toUpperCase(),
        itemsArray.map((p) => p.category),
    );

    const total = itemsArray.length;

    const start = (page - 1) * limit;
    const end = start + limit;

    const items = itemsArray.slice(start, end);

    return NextResponse.json({ items, total, page, limit });
}
