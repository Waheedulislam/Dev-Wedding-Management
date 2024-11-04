
import { useState } from 'react'
import {
    Button,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Menu,
    MenuItem,
    TextField,
    Paper,
    Divider,
    Box,
} from '@mui/material'
import { MoreHoriz } from '@mui/icons-material'

const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "User", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User", status: "Active" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "Moderator", status: "Active" },
]

export default function UsersPage() {
    const [sortColumn, setSortColumn] = useState('')
    const [sortDirection, setSortDirection] = useState('asc')
    const [anchorEl, setAnchorEl] = useState(null)

    const handleSort = (column) => {
        setSortDirection((prev) => (column === sortColumn && prev === 'asc' ? 'desc' : 'asc'))
        setSortColumn(column)
    }

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const sortedUsers = [...users].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1
        if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1
        return 0
    })

    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <h1 className="font-semibold text-5xl text-gray-800 mb-6 text-center">User Management</h1>

            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <TextField
                    variant="outlined"
                    placeholder="Search users..."
                    className="w-full max-w-sm"
                    size="small"
                />
                <Button variant="contained" color="primary" className="bg-blue-600 text-white ml-3">
                    Add New User
                </Button>
            </Box>

            <TableContainer component={Paper} elevation={3} className="rounded-lg overflow-hidden shadow-sm">
                <Table>
                    <TableHead className="bg-gray-50">
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell sortDirection={sortColumn === 'name' ? sortDirection : false}>
                                <TableSortLabel
                                    active={sortColumn === 'name'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('name')}
                                >
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sortDirection={sortColumn === 'email' ? sortDirection : false}>
                                <TableSortLabel
                                    active={sortColumn === 'email'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('email')}
                                >
                                    Email
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {sortedUsers.map((user) => (
                            <TableRow key={user.id} className="hover:bg-gray-50 transition">
                                <TableCell className="font-medium">{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-semibold ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={handleMenuOpen}>
                                        <MoreHoriz />
                                    </IconButton>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleMenuClose}
                                        PaperProps={{
                                            className: 'shadow-lg',
                                        }}
                                    >
                                        <MenuItem onClick={handleMenuClose}>View Details</MenuItem>
                                        <MenuItem onClick={handleMenuClose}>Edit User</MenuItem>
                                        <Divider />
                                        <MenuItem onClick={handleMenuClose} className="text-red-600">
                                            Delete User
                                        </MenuItem>
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
