import mongoose from "mongoose";

let isConnected = false;

export async function connect() {
    if (isConnected) return mongoose.connection;

    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is missing");
    }

    if (mongoose.connection.readyState === 1) {
        isConnected = true;
        return mongoose.connection;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Cluster0",
        });

        isConnected = true;
        console.log("MongoDB connected");

        return mongoose.connection;
    } catch (err) {
        console.error("MongoDB connection error:", err);
        throw err;
    }
}
