'use client'

import { useState } from 'react'
import {
    Button,
    IconButton,
    Menu,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    TextField,
    Paper,
    Box,
    Badge as MUIBadge,
} from '@mui/material'
import { MoreHoriz, ArrowUpward, ArrowDownward } from '@mui/icons-material'

const events = [
    { id: 1, name: "Summer Music Festival", date: "2023-07-15", location: "Central Park", status: "Upcoming" },
    { id: 2, name: "Tech Conference 2023", date: "2023-09-22", location: "Convention Center", status: "Open" },
    { id: 3, name: "Food & Wine Expo", date: "2023-08-05", location: "City Hall", status: "Sold Out" },
    { id: 4, name: "Charity Gala Dinner", date: "2023-11-10", location: "Grand Hotel", status: "Upcoming" },
    { id: 5, name: "Local Art Exhibition", date: "2023-10-01", location: "Community Center", status: "Open" },
]

export default function Event() {
    const [sortColumn, setSortColumn] = useState('')
    const [sortDirection, setSortDirection] = useState('asc')
    const [menuAnchor, setMenuAnchor] = useState(null)

    const sortedEvents = [...events].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1
        if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1
        return 0
    })

    const handleSort = (column) => {
        setSortDirection(column === sortColumn && sortDirection === 'asc' ? 'desc' : 'asc')
        setSortColumn(column)
    }

    const handleMenuOpen = (event) => setMenuAnchor(event.currentTarget)
    const handleMenuClose = () => setMenuAnchor(null)

    return (
        <Box className="p-6 bg-gray-100 min-h-screen">


            <h1 className="font-semibold text-4xl text-gray-600 mb-6 text-center">Event Management</h1>

            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <TextField
                    variant="outlined"
                    placeholder="Search events..."
                    size="small"
                    className="w-full max-w-sm"
                />
                <Button variant="contained" color="primary" className="bg-blue-600 text-white ml-4">
                    Create New Event
                </Button>
            </Box>

            <TableContainer component={Paper} elevation={3} className="rounded-lg shadow-lg">
                <Table>
                    <TableHead className="bg-gray-50">
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'name'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('name')}
                                    IconComponent={sortDirection === 'asc' ? ArrowUpward : ArrowDownward}
                                >
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'date'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('date')}
                                    IconComponent={sortDirection === 'asc' ? ArrowUpward : ArrowDownward}
                                >
                                    Date
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedEvents.map((event) => (
                            <TableRow key={event.id} className="hover:bg-gray-50 transition-colors">
                                <TableCell className="font-medium">{event.id}</TableCell>
                                <TableCell>{event.name}</TableCell>
                                <TableCell>{event.date}</TableCell>
                                <TableCell>{event.location}</TableCell>
                                <TableCell>
                                    <MUIBadge
                                        variant="outlined"
                                        color={
                                            event.status === 'Upcoming'
                                                ? 'primary'
                                                : event.status === 'Open'
                                                    ? 'success'
                                                    : 'secondary'
                                        }
                                        className="px-2 py-1"
                                    >
                                        {event.status}
                                    </MUIBadge>
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={handleMenuOpen}>
                                        <MoreHoriz />
                                    </IconButton>
                                    <Menu
                                        anchorEl={menuAnchor}
                                        open={Boolean(menuAnchor)}
                                        onClose={handleMenuClose}
                                        PaperProps={{
                                            className: 'shadow-lg',
                                        }}
                                    >
                                        <MenuItem onClick={handleMenuClose}>View Details</MenuItem>
                                        <MenuItem onClick={handleMenuClose}>Edit Event</MenuItem>
                                        <MenuItem onClick={handleMenuClose}>Manage Tickets</MenuItem>
                                        <MenuItem onClick={handleMenuClose} className="text-red-600">
                                            Cancel Event
                                        </MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    )
}
