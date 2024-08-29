import TicketCard from "./(components)/TicketCard";
import { NextURL } from "next/dist/server/web/next-url";

const GetAllTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store"
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Dashboard = async () => {
  const { tickets } = await GetAllTickets();
  const uniquecategorys = [...new Set(tickets?.map(({ category }) => category))];
  
  return (
    <div className="p-5 ">
      <div className="mb-4">
        { tickets && uniquecategorys?.map(uniquecategory => 
        <div key={uniquecategory}>
          <h2>{uniquecategory}</h2>
          <div className="lg:grid grid-cols-2 xl:grid-cols-4">
            {
              tickets.filter(ticket => ticket.category === uniquecategory).map((uniqueTicket,_index)=><TicketCard key={_index} Ticket={uniqueTicket}/>)
            }
         </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
