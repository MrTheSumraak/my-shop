import { NextResponse } from "next/server";
import { connect } from "@/lib/mongoDB";
import { IProduct } from "@/entities/product/api/types";

export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> },
) {
    const { id } = await context.params;
    const db = await connect();
    const doc = await db.collection("products").findOne({}); // {categories: {laptops: [...], phones: [...]}, flashSales: [...{}], popular: [...{}]}
    // console.log("DOC :", doc);
    if (!doc || !doc.categories) {
        return NextResponse.json(
            { error: "No products found" },
            { status: 404 },
        );
    }

    // Собираем все товары в один массив
    const productsCatagory = Object.values(doc.categories).flat();
    const flashSales = doc?.collection?.flashSales?.products ?? [];
    const popular = doc?.collection?.popular ?? [];

    const allProducts = [...productsCatagory, ...flashSales, ...popular];

    const product = allProducts.find((p: IProduct) => p.id === id);
    if (!product) {
        return NextResponse.json(
            { error: "Product not found" },
            { status: 404 },
        );
    }

    return NextResponse.json(product);
}