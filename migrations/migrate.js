import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { MongoClient } from "mongodb";
import fs from "fs";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db("Cluster0");
        const collection = db.collection("products");

        const raw = fs.readFileSync("./data/allProducts.json", "utf-8");
        const data = JSON.parse(raw);

        await collection.insertMany(data);

        console.log("Migration completed!");
    } catch (err) {
        console.error("Migration error:", err);
    } finally {
        await client.close();
    }
}

run();
