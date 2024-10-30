import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  Typography,
  ListItem,
  List,
  Drawer,
  ListItemText,
} from "@mui/material";
import { AccountCircle, Settings, ExitToApp } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "lucide-react";

const WeedingNavbar = () => {
  const [anchorEl, setAnchorEl] = useState();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenu = () => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
      }}
    >
      <Toolbar className="flex justify-between items-center">
        {/* Brand Logo */}
        <Typography variant="h6" component="a" href="/" className="font-bold text-black">
          Weeding
        </Typography>

        {/* Navbar Items */}
        <div className="flex gap-4 items-center">
          <Link
            to="/weeding/weedingHome"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Home
          </Link>

          <Link
            to="/weeding/weedingPrice"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Pricing
          </Link>

          <Link
            to="/weeding/weedingTeam"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Team
          </Link>
          <Link
            to="/weeding/services"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Services
          </Link>

          <Link
            to="/weeding/weedingBlogs"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Blogs
          </Link>
          <Link
            to="/weeding/MenuPlanner"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            MenuPlanner
          </Link>
          <Link
            to="/weeding/weedingAbout"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/weeding/Testimonial"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Testimonial
          </Link>
          <Link
            to="/weeding/Reservation"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Reservation
          </Link>
          <Link
            to="/dashboard"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Dashboard
          </Link>
          <Link
            to="/weeding/login"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Login
          </Link>
          <Link
            to="/weeding/register"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Register
          </Link>
        </div>

        {/* Search Bar */}
        <InputBase
          placeholder="Search..."
          className="bg-white bg-opacity-70 rounded-full px-4 py-1 text-gray-800"
          style={{ width: 120 }}
        />

        {/* Profile Menu */}
        <div>
          <IconButton onClick={handleMenu} color="inherit">
            <Avatar
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Profile Picture"
              className="w-8 h-8"
            />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <AccountCircle className="mr-2" /> Profile
              <Badge color="secondary" variant="dot" />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Settings className="mr-2" /> Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ExitToApp className="mr-2" /> Logout
            </MenuItem>
          </Menu>
        </div>
        <div className="flex gap-4 items-center   md:hidden">
          <IconButton onClick={handleDrawerOpen} color="default">
            <MenuIcon />
          </IconButton>
          <Drawer className="px-10" anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
            <List>
              <ListItem button component={Link} to="/weedingHome">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/weedingHome/about">
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button component={Link} to="/weedingHome/services">
                <ListItemText primary="Services" />
              </ListItem>
              <ListItem button component={Link} to="/weedingHome/blogs">
                <ListItemText primary="Blogs" />
              </ListItem>
              <ListItem button component={Link} to="/weedingHome/MenuPlanner">
                <ListItemText primary="MenuPlanner" />
              </ListItem>
            </List>
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default WeedingNavbar;
