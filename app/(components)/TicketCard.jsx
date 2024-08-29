import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const TicketCard = ({ Ticket }) => {
  const formatTimeStamp = timeStamp => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      munite: "2-digit",
      hour12: true
    };
    const data = new Date(timeStamp);
    return data.toLocaleString();
  };
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-2">
        <PriorityDisplay priority={Ticket.priority} />
        <div className="flex ml-auto">
          <DeleteBlock id={Ticket._id} />
        </div>
      </div>
      <Link href={`/TicketPage/${Ticket._id}`}  className="cursor-pointer">
      {/* {Ticket._id} */}
        <h4>
          {Ticket.title}
        </h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">
          {Ticket.description}
        </p>
        <div className="flex-grow" />
        <div className="flex mt-2">
          <div className="felx flex-col">
            <p className="text-xs my-1">{formatTimeStamp(Ticket.createdAt)}</p>
            <ProgressDisplay progress={Ticket.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={Ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
