import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import API from "../../../../api/api";
import EventForm from "../../../../Components/EventForm/EventForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await API.get("/events");
      console.log(response);

      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Error fetching events. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log("Attempting to delete event with ID:", id);
      await API.delete(`/events/${id}`);
      console.log("Deleted event with ID:", id);
      toast.success("Event deleted successfully!");
      fetchEvents(); // Refresh events list
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Error deleting event. Please try again.");
    }
  };

  const handleEditClick = (event) => {
    setEditingEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setEditingEvent(null);
    setOpen(false);
    fetchEvents();
  };

  return (
    <div className="container mx-auto p-4">
      <Button
        onClick={() => setOpen(true)}
        variant="contained"
        color="primary"
        className="mb-4"
      >
        Add New Event
      </Button>
      <div className="space-y-4 mt-6  sm:grid grid-cols-2 md:grid-cols-3 gap-4">
        {events.map((event) => (
          <Card
            key={event._id}
            className="shadow-md flex justify-between items-center p-4"
          >
            <CardContent>
              <Typography variant="h6">{event?.title}</Typography>
            </CardContent>
            <div>
              <IconButton onClick={() => handleEditClick(event)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(event._id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingEvent ? "Edit Event" : "Create Event"}
        </DialogTitle>
        <DialogContent>
          <EventForm event={editingEvent} onSubmit={handleClose} />
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </div>
  );
};

export default EventManagement;
