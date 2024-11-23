import { Bell, LogOut } from "lucide-react";
import { IconButton, Menu, MenuItem, Avatar, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

function AdminDashboardLayoutNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // user info
  const { user } = useContext(AuthContext);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <Typography
        variant="h6"
        component="h2"
        className="flex items-center gap-2 text-gray-800 font-semibold"
      >
        Welcome <p className="font-semibold text-blue-800">{user?.name}</p>
      </Typography>
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <IconButton color="default" aria-label="notifications">
          <Bell className="h-5 w-5" />
        </IconButton>

        {/* User Avatar with Dropdown Menu */}
        <IconButton onClick={handleMenuOpen} color="default" className="p-0">
          <Avatar src={user?.imgSrc} alt={user?.name} className="h-8 w-8" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          className="mt-2"
        >
          <div className="px-4 py-2">
            <Typography
              variant="body2"
              className="text-gray-700 font-bold"
              fontWeight={700}
            >
              {user?.email}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {user?.role}
            </Typography>
          </div>
          <MenuItem
            onClick={handleMenuClose}
            className="flex items-center space-x-2"
          >
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
}

export default AdminDashboardLayoutNavbar;
