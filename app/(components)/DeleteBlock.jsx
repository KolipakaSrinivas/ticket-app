"use client"
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const deleteCard = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Tickets/${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:text-red-200 cursor-pointer"
      onClick={deleteCard}
    />
  );
};

export default DeleteBlock;
