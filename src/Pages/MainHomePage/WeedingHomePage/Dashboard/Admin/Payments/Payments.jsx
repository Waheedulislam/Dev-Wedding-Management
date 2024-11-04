'use client'

import { useState } from 'react';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Menu, MenuItem, Badge } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const payments = [
    { id: 1, customer: "Alice Johnson", event: "Summer Music Festival", amount: 150.00, date: "2023-07-10", status: "Completed" },
    { id: 2, customer: "Bob Smith", event: "Tech Conference 2023", amount: 299.99, date: "2023-09-15", status: "Pending" },
    { id: 3, customer: "Charlie Brown", event: "Food & Wine Expo", amount: 75.50, date: "2023-07-30", status: "Completed" },
    { id: 4, customer: "Diana Ross", event: "Charity Gala Dinner", amount: 500.00, date: "2023-11-05", status: "Refunded" },
    { id: 5, customer: "Edward Norton", event: "Local Art Exhibition", amount: 25.00, date: "2023-09-25", status: "Completed" },
];

export default function Payments() {
    const [sortColumn, setSortColumn] = useState('customer');
    const [sortDirection, setSortDirection] = useState('asc');
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentPaymentId, setCurrentPaymentId] = useState(null);

    const handleSort = (column) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    const sortedPayments = [...payments].sort((a, b) => {
        const comparison = a[sortColumn] < b[sortColumn] ? -1 : 1;
        return sortDirection === 'asc' ? comparison : -comparison;
    });

    const handleMenuOpen = (event, id) => {
        setAnchorEl(event.currentTarget);
        setCurrentPaymentId(id);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setCurrentPaymentId(null);
    };

    return (
        <div>
            <h1 className="text-5xl text-center font-semibold  my-10">Payments & Transactions</h1>

            <div className="flex justify-between items-center mb-4">
                <TextField variant="outlined" className="max-w-sm" placeholder="Search payments..." />
                <Button variant="contained" color="primary">Export Transactions</Button>
            </div>


            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="w-[100px]">ID</TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'customer'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('customer')}
                                >
                                    Customer
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'event'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('event')}
                                >
                                    Event
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'amount'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('amount')}
                                >
                                    Amount
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'date'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('date')}
                                >
                                    Date
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell className="text-right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedPayments.map((payment) => (
                            <TableRow key={payment.id}>
                                <TableCell className="font-medium">{payment.id}</TableCell>
                                <TableCell>{payment.customer}</TableCell>
                                <TableCell>{payment.event}</TableCell>
                                <TableCell>${payment.amount.toFixed(2)}</TableCell>
                                <TableCell>{payment.date}</TableCell>
                                <TableCell>
                                    <Badge
                                        color={payment.status === 'Completed' ? 'success' : payment.status === 'Pending' ? 'warning' : 'error'}
                                        variant="dot"
                                    >
                                        {payment.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button onClick={(e) => handleMenuOpen(e, payment.id)}>
                                        <MoreVert />
                                    </Button>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl) && currentPaymentId === payment.id}
                                        onClose={handleMenuClose}
                                    >
                                        <MenuItem onClick={handleMenuClose}>View details</MenuItem>
                                        <MenuItem onClick={handleMenuClose}>Send receipt</MenuItem>
                                        <MenuItem className="text-red-600" onClick={handleMenuClose}>Issue refund</MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
