/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Menu,
  MenuItem,
  Badge,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import API from "../../../../../../api/api";
import BookingForm from "./BookingForm"; // Import the reusable form
import { ArrowDown, ArrowUp } from "lucide-react";

export default function Bookings() {
  const [bookings, setBookings] = useState([]); // Initialize as an empty array
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentBookingId, setCurrentBookingId] = useState(null);
  const [createBookingFormOpen, setCreateBookingFormOpen] = useState(false);
  const [editBookingFormOpen, setEditBookingFormOpen] = useState(false); // State to open the edit form
  const [newBooking, setNewBooking] = useState({
    event: "",
    customer: "",
    date: "",
    tickets: 1,
    status: "Pending",
  });

  // Fetch bookings from backend
  useEffect(() => {
    API.get("/bookings")
      .then((response) => {
        console.log(response.data.bookings); // Corrected logging
        // Ensure bookings is an array
        setBookings(
          Array.isArray(response.data.bookings) ? response.data.bookings : []
        );
      })
      .catch(() => {
        toast.error("Failed to fetch bookings");
      });
  }, []);

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedBookings = [...bookings].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to create a booking
  const createBooking = () => {
    API.post("/bookings", newBooking)
      .then((response) => {
        setBookings((prevBookings) => [...prevBookings, response.data]);
        toast.success("Booking created successfully!");
        setCreateBookingFormOpen(false); // Close the form after submission
        setNewBooking({
          event: "",
          customer: "",
          date: "",
          tickets: 1,
          status: "Pending",
        });
      })
      .catch(() => {
        toast.error("Failed to create booking");
      });
  };

  // Function to cancel a booking
  const cancelBooking = useCallback(
    (id) => {
      API.delete(`/bookings/${id}`)
        .then(() => {
          setBookings((prevBookings) =>
            prevBookings.filter((booking) => booking.id !== id)
          );
          toast.success("Booking cancelled successfully");
        })
        .catch(() => {
          toast.error("Failed to cancel booking");
        });
    },
    [bookings]
  );

  const handleMenuOpen = (event, bookingId) => {
    setAnchorEl(event.currentTarget);
    setCurrentBookingId(bookingId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentBookingId(null);
  };

  const handleEditBooking = (booking) => {
    setNewBooking(booking);
    setEditBookingFormOpen(true);
  };

  const handleCloseDialog = () => {
    setCreateBookingFormOpen(false);
    setEditBookingFormOpen(false);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6">Booking Management</h1>
      <div className="flex justify-between items-center mb-4">
        <TextField
          className="max-w-sm"
          placeholder="Search bookings..."
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: "white",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCreateBookingFormOpen(true)} // Open the form to create a new booking
          sx={{
            backgroundColor: "#007bff",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
        >
          Create New Booking
        </Button>
      </div>

      {/* Modal for Create or Edit Booking */}
      <Dialog
        open={createBookingFormOpen || editBookingFormOpen}
        onClose={handleCloseDialog}
        PaperProps={{
          style: {
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <DialogTitle>
          {createBookingFormOpen ? "Create New Booking" : "Edit Booking"}
        </DialogTitle>
        <DialogContent>
          <BookingForm
            bookingData={newBooking}
            handleInputChange={handleInputChange}
            handleSubmit={createBooking}
            formTitle={
              createBookingFormOpen ? "Create New Booking" : "Edit Booking"
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" variant="text">
            Cancel
          </Button>
          <Button onClick={createBooking} color="primary" variant="contained">
            {createBookingFormOpen ? "Create" : "Update"}
          </Button>
        </DialogActions>
      </Dialog>

      <TableContainer component={Paper} sx={{ borderRadius: "8px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="w-[100px] font-semibold">ID</TableCell>
              <TableCell
                onClick={() => handleSort("event")}
                className="cursor-pointer font-semibold"
              >
                Event{" "}
                {sortColumn === "event" ? (
                  sortDirection === "asc" ? (
                    <ArrowUp />
                  ) : (
                    <ArrowDown />
                  )
                ) : null}
              </TableCell>
              <TableCell
                onClick={() => handleSort("customer")}
                className="cursor-pointer font-semibold"
              >
                Customer{" "}
                {sortColumn === "customer" ? (
                  sortDirection === "asc" ? (
                    <ArrowUp />
                  ) : (
                    <ArrowDown />
                  )
                ) : null}
              </TableCell>
              <TableCell
                onClick={() => handleSort("date")}
                className="cursor-pointer font-semibold"
              >
                Date{" "}
                {sortColumn === "date" ? (
                  sortDirection === "asc" ? (
                    <ArrowUp />
                  ) : (
                    <ArrowDown />
                  )
                ) : null}
              </TableCell>
              <TableCell className="font-semibold">Tickets</TableCell>
              <TableCell className="font-semibold">Status</TableCell>
              <TableCell className="text-right font-semibold">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(sortedBookings) &&
              sortedBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.id}</TableCell>
                  <TableCell>{booking.event}</TableCell>
                  <TableCell>{booking.customer}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.tickets}</TableCell>
                  <TableCell>
                    <Badge
                      color={
                        booking.status === "Confirmed"
                          ? "success"
                          : booking.status === "Pending"
                            ? "warning"
                            : "error"
                      }
                      badgeContent={booking.status}
                      sx={{
                        borderRadius: "4px",
                        padding: "4px 8px",
                        textTransform: "capitalize",
                      }}
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outlined"
                      onClick={(event) => handleMenuOpen(event, booking.id)}
                      sx={{
                        backgroundColor: "white",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        "&:hover": {
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                    >
                      <MoreHoriz />
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={
                        Boolean(anchorEl) && currentBookingId === booking.id
                      }
                      onClose={handleMenuClose}
                      PaperProps={{
                        style: {
                          backgroundColor: "#fff",
                          borderRadius: "8px",
                          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        },
                      }}
                    >
                      <MenuItem onClick={() => cancelBooking(booking.id)}>
                        Cancel Booking
                      </MenuItem>
                      <MenuItem onClick={() => handleEditBooking(booking)}>
                        Edit Booking
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ToastContainer />
    </div>
  );
}
