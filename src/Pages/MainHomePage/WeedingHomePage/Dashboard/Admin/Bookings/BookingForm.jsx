import { TextField, Button, Box, Typography } from "@mui/material";

export default function BookingForm({
  bookingData,
  handleInputChange,
  handleSubmit,
  formTitle = "Add New Booking",
}) {
  return (
    <Box className="bg-white p-4 ">
      <Typography variant="h5" className="font-bold mb-4">
        {formTitle}
      </Typography>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          label="Event"
          name="event"
          value={bookingData.event}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
          size="small"
          sx={{
            mb: 2,
          }}
        />
        <TextField
          label="Customer"
          name="customer"
          value={bookingData.customer}
          onChange={handleInputChange}
          fullWidth
          sx={{
            mb: 2,
          }}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Date"
          name="date"
          value={bookingData.date}
          onChange={handleInputChange}
          fullWidth
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            mb: 2,
          }}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          value={bookingData.tickets}
          onChange={handleInputChange}
          fullWidth
          sx={{
            mb: 2,
          }}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Status"
          name="status"
          value={bookingData.status}
          onChange={handleInputChange}
          fullWidth
          sx={{
            mb: 2,
          }}
          variant="outlined"
          size="small"
        />
        <Box className="flex justify-end mt-4">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            size="small"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}
