import { connect } from "@/lib/mongoDB";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const page = Number(searchParams.get("page")) || 1;
        const limit = Number(searchParams.get("limit")) || 4;

        const db = await connect();

        const products = await db.collection("products").findOne({});
        const itemsArray = products?.collection?.flashSales?.products ?? [];
        const salesEnd = products?.collection?.flashSales?.discountEndAt;

        const start = (page - 1) * limit;
        const end = start + limit;

        return Response.json({
            items: itemsArray.slice(start, end),
            total: itemsArray.length,
            salesEnd,
            limit,
            page,
        });
    } catch (err) {
        console.error("API ERROR:", err);
        return Response.json(
            { error: "Failed to fetch flashSales products", err },
            { status: 500 },
        );
    }
}
