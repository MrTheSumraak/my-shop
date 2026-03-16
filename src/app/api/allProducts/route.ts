import { NextResponse } from "next/server";
import { connect } from "@/lib/mongoDB";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const page = Number(searchParams.get("page")) || 1;
        const limit = Number(searchParams.get("limit")) || 4;
        const start = (page - 1) * limit;
        const end = start + limit;

        const db = await connect();
        const doc = await db.collection("products").findOne({});
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
        console.log("ALL PRODUCTS :", allProducts[0]);

        return Response.json({
            items: allProducts.slice(start, end),
            total: allProducts.length,
            limit,
            page,
        });
    } catch (error) {
        console.error("API ERROR:", error);
        return NextResponse.json(
            { error: "Failed to fetch products" },
            { status: 500 },
        );
    }
}