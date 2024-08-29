import mongoose from "mongoose";
import connectionToDB from './connectionToDB'

const ticketSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
    category: String
  },
  { timestamps: true }
);
connectionToDB()

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
