import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        categories: {
            laptops: Array,
            smartphones: Array,
            components: Array,
            wearables: Array,
            audio: Array,
        },
        collection: {
            flashSales: {
                discountEndAt: String,
                products: Array,
            },
            popular: Array,
        },
    },
    { strict: false, collection: "products" },
);

export default mongoose.models.Product ||
    mongoose.model("Product", ProductSchema);
