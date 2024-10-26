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
      }}
    >
      <Toolbar className="flex justify-between items-center">
        {/* Brand Logo */}
        <Typography
          variant="h6"
          component="a"
          href="/"
          className="font-bold text-black"
        >
          Weeding
        </Typography>

        {/* Navbar Items */}
        <div className="flex gap-4 items-center">
          <Link
            to="/"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            About
          </Link>

          <Link
            to="/services"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Services
          </Link>

          <Link
            to="/blogs"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Blogs
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
        <div className="flex gap-4 items-center">
          <IconButton onClick={handleDrawerOpen} color="inherit">
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
            <List>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/about">
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button component={Link} to="/services">
                <ListItemText primary="Services" />
              </ListItem>
              <ListItem button component={Link} to="/blogs">
                <ListItemText primary="Blogs" />
              </ListItem>
            </List>
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default WeedingNavbar;
