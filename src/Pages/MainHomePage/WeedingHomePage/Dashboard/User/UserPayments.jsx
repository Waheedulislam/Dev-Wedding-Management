import { Button } from "@mui/material";
import { Download } from "lucide-react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function UserPayments() {
    const payments = [
        { id: 1, date: "2024-05-15", amount: 1500, status: "Paid" },
        { id: 2, date: "2024-06-01", amount: 2000, status: "Pending" },
        { id: 3, date: "2024-06-15", amount: 1000, status: "Upcoming" },
    ];

    return (
        <div className="space-y-6 p-6">
            <h1 className="text-3xl font-bold">Payments & Invoices</h1>
            <TableContainer component={Paper} className="shadow-md">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="font-semibold">Date</TableCell>
                            <TableCell className="font-semibold">Amount</TableCell>
                            <TableCell className="font-semibold">Status</TableCell>
                            <TableCell className="font-semibold">Invoice</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {payments.map((payment) => (
                            <TableRow key={payment.id}>
                                <TableCell>{payment.date}</TableCell>
                                <TableCell>${payment.amount}</TableCell>
                                <TableCell>{payment.status}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        startIcon={<Download className="h-4 w-4" />}
                                        className="text-blue-500 border-blue-500 hover:bg-blue-50"
                                    >
                                        Download
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
