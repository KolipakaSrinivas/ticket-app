import Ticket from "@/app/(lib)/Models";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketBody = body.formData;
    await Ticket.create(ticketBody);
    return NextResponse.json({ message: "Ticket is created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ messgae: "ticket is not created", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tickets  = await Ticket.find()
    return NextResponse.json({tickets}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ messgae: "error", error }, { status: 500 });
  }
}


