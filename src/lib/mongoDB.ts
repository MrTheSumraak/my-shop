import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

let db: any = null;

export async function connect() {
  if (!db) {
    await client.connect();
    db = client.db("Cluster0"); // имя твоей базы
  }
  return db;
}
