import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}
if (!process.env.MONGODB_URI) {
  throw new Error("Please add MONGODB_URI to your .env.local file");
}

if (process.env.NODE_ENV === "development") {
  if (!globalThis._mongoClientPromise) {
    client = new MongoClient(uri,options)
    globalThis._mongoClientPromise = client.connect();
   }
   clientPromise = globalThis._mongoClientPromise;
  }
  else {
  client = new MongoClient(uri,options);
  clientPromise = client.connect();
  }

export default clientPromise;