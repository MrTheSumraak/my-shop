import { IProduct, ISalesProducts } from "@/entities/product/api/types";
import { connect } from "@/lib/mongoDB";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 3;
    const category = searchParams.get("category");

    const db = await connect();

    const doc = await db?.collection("products").findOne({});

    let itemsArray: IProduct[] | ISalesProducts[] = [];

    if (category) {
        itemsArray = doc?.categories[category].flat() || [];
        itemsArray = itemsArray.filter(
            (product: IProduct | ISalesProducts) =>
                product.category === category,
        );
    } else {
        itemsArray = Object.values(doc?.categories).flat() || [];
    }

    const start = (page - 1) * limit;
    const end = start + limit;

    return Response.json({
        items: itemsArray.slice(start, end),
        total: itemsArray.length,
        limit,
        page,
    });
}
