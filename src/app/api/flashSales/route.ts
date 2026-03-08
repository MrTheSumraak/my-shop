import { connect } from "@/lib/mongoDB";

export async function GET() {
    try {
        const db = await connect();

        const products = await db.collection("products").findOne({});
        delete products._id;
        return Response.json(products?.flashSales ?? []);
    } catch (error) {
        console.error("API ERROR:", error);
        return Response.json(
            { error: "Failed to fetch flashSales products" },
            { status: 500 },
        );
    }
}
