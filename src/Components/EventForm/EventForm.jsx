import { useState } from "react";
import { TextField, Button } from "@mui/material";
import API from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EventForm = ({ event = {}, onSubmit }) => {
  const [title, setTitle] = useState(event?.title || "");
  const [description, setDescription] = useState(event?.description || "");
  const [date, setDate] = useState(event?.date || "");
  const [location, setLocation] = useState(event?.location || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, description, date, location };
    console.log(data);

    try {
      if (event && event._id) {
        await API.put(`/events/${event._id}`, data);
        setTimeout(() => toast.success("Event updated successfully!"), 2000);
      } else {
        await API.post("/events/create", data);
        console.log("getting", data);
        setTimeout(() => toast.success("Event created successfully!"), 2000);
      }
      onSubmit(); // Close form after successful submission
    } catch (error) {
      console.error("Error submitting event:", error);
      setTimeout(
        () => toast.error("Error submitting event. Please try again."),
        1000
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg mx-auto p-4 bg-white shadow rounded"
    >
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        variant="outlined"
        fullWidth
        multiline
        required
      />
      <TextField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        variant="outlined"
        fullWidth
        required
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        variant="outlined"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>

      {/* Toast Container to show toast notifications */}
      <ToastContainer />
    </form>
  );
};

export default EventForm;
