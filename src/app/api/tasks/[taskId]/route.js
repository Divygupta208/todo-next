import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, context) {
  const taskId = context.params.taskId;
  const filter = { _id: new ObjectId(taskId) };
  const payload = await request.json();

  const updateDocument = {
    $set: payload,
  };
  console.log(filter);
  console.log(updateDocument);
  const client = await MongoClient.connect(
    "mongodb+srv://divygupta208:Od3ZfMtHifvrEy4g@cluster0.wq9srs7.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();

  const todoCollection = db.collection("tasks");

  const result = await todoCollection.findOneAndUpdate(filter, updateDocument);

  client.close();

  return NextResponse.json({ result });
}

export async function DELETE(request, context) {
  const taskId = context.params.taskId;
  const filter = { _id: new ObjectId(taskId) };

  const client = await MongoClient.connect(
    "mongodb+srv://divygupta208:Od3ZfMtHifvrEy4g@cluster0.wq9srs7.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();

  const todoCollection = db.collection("tasks");

  const result = await todoCollection.deleteOne(filter);

  return NextResponse.json({
    message: "Successfully deleted",
    response: result,
  });
}
