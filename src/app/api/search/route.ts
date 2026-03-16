import { NextResponse } from "next/server";
import Product from "../../../models/products";
import { connect } from "@/lib/mongoDB";

export async function POST(req: Request) {
    try {
        const { filter } = await req.json();
        await connect();

        console.log("FILTERED", filter);

        const root = await Product.findOne();

        // Собираем все товары
        const allProducts = [
            ...root.categories.laptops,
            ...root.categories.smartphones,
            ...root.categories.components,
            ...root.categories.wearables,
            ...root.categories.audio,
            ...root.collection.flashSales.products,
            ...root.collection.popular,
        ];

        const result = allProducts;
        
        const filteredProducts = result
            .filter((p) =>
                filter.category?.length > 0
                    ? filter.category.includes(p.category)
                    : true,
            )
            .filter((p) =>
                filter.brand?.length > 0
                    ? filter.brand.includes(p.brand)
                    : true,
            )
            .filter((p) =>
                filter.price
                    ? p.price >= filter.price.min && p.price <= filter.price.max
                    : true,
            )
            .filter((p) =>
                filter.inStock !== undefined
                    ? p.inStock === filter.inStock
                    : true,
            );

        console.log("filteredProducts", filteredProducts[0]);
        return NextResponse.json({ products: filteredProducts });
    } catch (e) {
        console.log("SERVER ERROR", e);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
