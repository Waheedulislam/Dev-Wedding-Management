'use client'

import { useState } from 'react'
import { Button, TextField, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, Menu, MenuItem, Badge } from '@mui/material'
import { MoreHoriz } from '@mui/icons-material'

const bookings = [
    { id: 1, event: "Summer Music Festival", customer: "Alice Johnson", date: "2023-07-15", tickets: 2, status: "Confirmed" },
    { id: 2, event: "Tech Conference 2023", customer: "Bob Smith", date: "2023-09-22", tickets: 1, status: "Pending" },
    { id: 3, event: "Food & Wine Expo", customer: "Charlie Brown", date: "2023-08-05", tickets: 4, status: "Confirmed" },
    { id: 4, event: "Charity Gala Dinner", customer: "Diana Ross", date: "2023-11-10", tickets: 2, status: "Cancelled" },
    { id: 5, event: "Local Art Exhibition", customer: "Edward Norton", date: "2023-10-01", tickets: 3, status: "Confirmed" },
]

export default function Bookings() {
    const [sortColumn, setSortColumn] = useState('')
    const [sortDirection, setSortDirection] = useState('asc')
    const [anchorEl, setAnchorEl] = useState(null)

    const handleSort = (column) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
        } else {
            setSortColumn(column)
            setSortDirection('asc')
        }
    }

    const sortedBookings = [...bookings].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1
        if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1
        return 0
    })

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Booking Management</h1>
            <div className="flex justify-between items-center mb-4">
                <TextField className="max-w-sm" placeholder="Search bookings..." variant="outlined" />
                <Button variant="contained" color="primary">Create New Booking</Button>
            </div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="w-[100px]">ID</TableCell>
                            <TableCell onClick={() => handleSort('event')} className="cursor-pointer">
                                Event {sortColumn === 'event' ? (sortDirection === 'asc' ? '🔼' : '🔽') : null}
                            </TableCell>
                            <TableCell onClick={() => handleSort('customer')} className="cursor-pointer">
                                Customer {sortColumn === 'customer' ? (sortDirection === 'asc' ? '🔼' : '🔽') : null}
                            </TableCell>
                            <TableCell onClick={() => handleSort('date')} className="cursor-pointer">
                                Date {sortColumn === 'date' ? (sortDirection === 'asc' ? '🔼' : '🔽') : null}
                            </TableCell>
                            <TableCell>Tickets</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell className="text-right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedBookings.map((booking) => (
                            <TableRow key={booking.id}>
                                <TableCell className="font-medium">{booking.id}</TableCell>
                                <TableCell>{booking.event}</TableCell>
                                <TableCell>{booking.customer}</TableCell>
                                <TableCell>{booking.date}</TableCell>
                                <TableCell>{booking.tickets}</TableCell>
                                <TableCell>
                                    <Badge color={
                                        booking.status === 'Confirmed' ? 'success' :
                                            booking.status === 'Pending' ? 'warning' :
                                                'error'
                                    }>
                                        {booking.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button
                                        variant="outlined"
                                        onClick={(event) => setAnchorEl(event.currentTarget)}>
                                        <MoreHoriz />
                                    </Button>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={() => setAnchorEl(null)}
                                    >
                                        <MenuItem onClick={() => setAnchorEl(null)}>View details</MenuItem>
                                        <MenuItem onClick={() => setAnchorEl(null)}>Edit booking</MenuItem>
                                        <MenuItem onClick={() => setAnchorEl(null)}>Resend confirmation</MenuItem>
                                        <MenuItem onClick={() => setAnchorEl(null)} className="text-red-600">Cancel booking</MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
