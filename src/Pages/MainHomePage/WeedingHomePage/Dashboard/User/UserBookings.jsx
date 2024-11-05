import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

export default function UserBookings() {
    const bookings = [
        { id: 1, vendor: "Elegant Catering", event: "Wedding Anniversary", status: "Confirmed" },
        { id: 2, vendor: "Floral Fantasies", event: "Corporate Seminar", status: "Pending" },
        { id: 3, vendor: "Sound Masters", event: "Birthday Party", status: "Cancelled" },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "Confirmed":
                return "bg-green-100 text-green-700";
            case "Pending":
                return "bg-yellow-100 text-yellow-700";
            case "Cancelled":
                return "bg-red-100 text-red-700";
            default:
                return "";
        }
    };

    return (
        <div className="space-y-6 p-6">
            <h1 className="text-3xl font-bold">Booking Status</h1>
            <TableContainer component={Paper} className="shadow-md">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="font-semibold">Vendor</TableCell>
                            <TableCell className="font-semibold">Event</TableCell>
                            <TableCell className="font-semibold">Status</TableCell>
                            <TableCell className="font-semibold">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookings.map((booking) => (
                            <TableRow key={booking.id}>
                                <TableCell>{booking.vendor}</TableCell>
                                <TableCell>{booking.event}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={booking.status}
                                        className={`capitalize ${getStatusColor(booking.status)}`}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" size="small">
                                        View Details
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
