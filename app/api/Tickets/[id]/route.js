import { NextResponse } from "next/server";
import Ticket from "@/app/(lib)/Models";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "ticket is delete" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "ticket not delete", error },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const TicketFound = await Ticket.findOne({ _id: id });
    return NextResponse.json({ TicketFound }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const UpdateTicket = body.formData;
    const res = await Ticket.findByIdAndUpdate(id, {
      ...UpdateTicket
    });
    return NextResponse.json({ message: "Ticket is update" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Ticket is not update", error },
      { status: 500 }
    );
  }
}
