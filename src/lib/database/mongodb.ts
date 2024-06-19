import mongoose, { Mongoose } from "mongoose";

interface ConnectionType {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cache: ConnectionType = (global as any).mongoose;
if (cache == null) {
  cache = (global as any).mongoose || { conn: null, promise: null };
}

const URI = process.env.MONGO_URI as string;

export default async function connectToDatabase() {
  if (!URI) throw Error("Missing mongo URI");
  if (cache.conn) return cache.conn;

  cache.promise =
    cache.promise ||
    mongoose.connect(URI, {
      dbName: "pLUSD",
      bufferCommands: false,
    } as mongoose.ConnectOptions);

  cache.conn = await cache.promise;

  return cache.conn;
}
