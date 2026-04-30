import clientPromise from "@/library/db";
import { NextResponse } from "next/server";
export const runtime = "nodejs";


export async function POST(req: Request) {
    try {
      const{ name, email, message } = await req.json();
      const client = await clientPromise;
      const db = client.db("pathwaysDB");

      await db.collection("messages").insertOne({
        name,
        email,
        message,
        createdAt: new Date(),
      });

      return NextResponse.json({ success: true });
    } catch (err) {
      console.error(err);
      return NextResponse.json (
        { error: "Failed to send message" },
        { status : 500}
      );
     }
    }