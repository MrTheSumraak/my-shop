import { connect } from "@/lib/mongoDB";

export async function GET() {
    try {
        const db = await connect();

        const products = await db.collection("products").findOne({});

        return Response.json(products?.popular ?? []);
    } catch (error) {
        console.error("API ERROR:", error);
        return Response.json(
            { error: "Failed to fetch popular products" },
            { status: 500 },
        );
    }
}
