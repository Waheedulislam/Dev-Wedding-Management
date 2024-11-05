import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function UserEvents() {
    const events = [
        { id: 1, name: "Wedding Anniversary", date: "2024-06-15", guests: 50 },
        { id: 2, name: "Corporate Seminar", date: "2024-07-22", guests: 100 },
        { id: 3, name: "Birthday Party", date: "2024-08-10", guests: 30 },
    ];

    return (
        <div className="space-y-6 p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">My Events</h1>
                <Button variant="contained" startIcon={<AddCircleOutlineIcon />} color="primary">
                    Create Event
                </Button>
            </div>
            <TableContainer component={Paper} className="shadow-md">
                <Table>
                    <TableHead>
                        <TableRow className="bg-gray-100">
                            <TableCell className="font-semibold">Event Name</TableCell>
                            <TableCell className="font-semibold">Date</TableCell>
                            <TableCell className="font-semibold">Guests</TableCell>
                            <TableCell className="font-semibold">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {events.map((event) => (
                            <TableRow key={event.id} className="hover:bg-gray-50">
                                <TableCell>{event.name}</TableCell>
                                <TableCell>{event.date}</TableCell>
                                <TableCell>{event.guests}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" size="small" color="primary">
                                        Edit
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
