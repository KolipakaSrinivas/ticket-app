import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async id => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-cache"
    });
    if (!res.ok) {
      throw new Error("Failed to get Ticket");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id == "new" ? false : true;
  let ticketData = {};

  if (EDITMODE) {
    ticketData = await getTicketById(params.id);
    ticketData = ticketData.TicketFound;
  } else {
    ticketData = {
      _id: "new"
    };
  }
  return (
    <div>
      <TicketForm ticket={ticketData} />
    </div>
  );
};

export default TicketPage;
