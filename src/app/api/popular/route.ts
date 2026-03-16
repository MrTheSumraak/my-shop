import { connect } from "@/lib/mongoDB";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const page = Number(searchParams.get("page")) || 1;
        const limit = Number(searchParams.get("limit")) || 4;

        const db = await connect();

        const products = await db?.collection("products").findOne({});
        const itemsArray = products?.collection?.popular ?? [];

        const start = (page - 1) * limit;
        const end = start + limit;

        return Response.json({
            items: itemsArray.slice(start, end),
            total: itemsArray.length,
            limit,
            page,
        });
    } catch (error) {
        console.error("API ERROR:", error);
        return Response.json(
            { error: "Failed to fetch popular products" },
            { status: 500 },
        );
    }
}
