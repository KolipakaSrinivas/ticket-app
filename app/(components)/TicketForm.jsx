"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TicketForm = ({ ticket }) => {
  const router = useRouter();
  const EDITMODE = ticket._id === "new" ? false : true;

  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json"
      });
      if (!res.ok) {
        throw new Error("failed to update Ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json"
      });
      if (!res.ok) {
        throw new Error("failed to create Ticket");
      }
    }

    router.push("/");
    router.refresh();
  };

  let statingTickeData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not started",
    active: false,
    category: "Hardware problem"
  };

  if (EDITMODE) {
    statingTickeData = {
      ["title"]: ticket.title,
      ["description"]: ticket.description,
      ["priority"]: ticket.priority,
      ["progress"]: ticket.progress,
      ["status"]: ticket.status,
      ["active"]: ticket.active,
      ["category"]: ticket.category
    };
  }

  const [formData, setFormData] = useState(statingTickeData);
  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-3 w-1/2" onSubmit={handleSubmit}>
        <h2>
          {EDITMODE ? "update Your Ticket" : "Create Your Ticket"}
        </h2>
        <label>Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required={true}
          value={formData.title}
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          required={true}
          onChange={handleChange}
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>
        <label>Priority</label>
        <div>
          <input
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            id="priority"
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            id="priority"
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            id="priority"
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            id="priority"
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            id="priority"
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min={0}
          max={100}
          onChange={handleChange}
        />
        <label>Status</label>
        <select
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input
          type="submit"
          className="btn"
          value={EDITMODE ? "update Your Ticket" : "Create Your Ticket"}
        />
      </form>
    </div>
  );
};

export default TicketForm;
