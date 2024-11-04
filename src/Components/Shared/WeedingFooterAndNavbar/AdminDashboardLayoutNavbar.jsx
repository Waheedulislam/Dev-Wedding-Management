
import { Bell, LogOut } from 'lucide-react';
import { IconButton, Menu, MenuItem, Avatar, Typography } from '@mui/material';
import { useState } from 'react';

function AdminDashboardLayoutNavbar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <Typography variant="h6" component="h2" className="text-gray-800 font-semibold">
                Welcome, Admin
            </Typography>
            <div className="flex items-center space-x-4">
                {/* Notification Icon */}
                <IconButton color="default" aria-label="notifications">
                    <Bell className="h-5 w-5" />
                </IconButton>

                {/* User Avatar with Dropdown Menu */}
                <IconButton onClick={handleMenuOpen} color="default" className="p-0">
                    <Avatar src="/avatars/01.png" alt="Admin" className="h-8 w-8" />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    className="mt-2"
                >
                    <div className="px-4 py-2">
                        <Typography variant="body2" className="text-gray-700">
                            admin@example.com
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                            Administrator
                        </Typography>
                    </div>
                    <MenuItem onClick={handleMenuClose} className="flex items-center space-x-2">
                        <LogOut className="h-4 w-4" />
                        <span>Log out</span>
                    </MenuItem>
                </Menu>
            </div>
        </header>
    );
}

export default AdminDashboardLayoutNavbar;
