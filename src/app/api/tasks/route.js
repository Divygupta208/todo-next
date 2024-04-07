import { MongoClient } from "mongodb";

export async function POST(req) {
  const data = await req.json();

  const client = await MongoClient.connect(
    "mongodb+srv://divygupta208:Od3ZfMtHifvrEy4g@cluster0.wq9srs7.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();

  const todoCollection = db.collection("tasks");

  const result = await todoCollection.insertOne(data);

  client.close();

  return new Response(JSON.stringify(result));
}
