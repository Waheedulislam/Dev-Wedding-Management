import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  ListItem,
  List,
  Drawer,
  ListItemText,
  Box,
} from "@mui/material";
import { AccountCircle, Settings, ExitToApp } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu"; // Corrected import
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const WeedingNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownAnchor, setDropdownAnchor] = useState(null);

  const { user, logout } = useContext(AuthContext);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const handleDropdownToggle = (event) =>
    setDropdownAnchor((prev) => (prev ? null : event.currentTarget));
  const handleDropdownClose = () => setDropdownAnchor(null);

  const handleLogout = () => {
    logout();
    handleClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
      }}
    >
      <Toolbar className="flex justify-between container mx-auto items-center">
        {/* Brand Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          className="font-bold text-black"
        >
          Weeding
        </Typography>

        {/* Navbar Items */}
        <div className="flex gap-4 items-center">
          <Link to="/weedingHome" className="hidden md:inline-block text-black hover:text-gray-700 transition">
            Home
          </Link>
          <Link to="/weedingPrice" className="hidden md:inline-block text-black hover:text-gray-700 transition">
            Pricing
          </Link>
          <Link to="/MenuPlanner" className="hidden md:inline-block text-black hover:text-gray-700 transition">
            Menu Planner
          </Link>

          {/* Dropdown Menu */}
          <Box
            onClick={handleDropdownToggle}
            className="hidden md:inline-block text-black hover:text-gray-700 cursor-pointer"
          >
            Pages
          </Box>
          <Menu
            anchorEl={dropdownAnchor}
            open={Boolean(dropdownAnchor)}
            onClose={handleDropdownClose}
          >
            <MenuItem component={Link} to="/Reservation" onClick={handleDropdownClose}>
              Reservation
            </MenuItem>
            <MenuItem component={Link} to="/weedingBlogs" onClick={handleDropdownClose}>
              Blogs
            </MenuItem>
            <MenuItem component={Link} to="/weedingTeam" onClick={handleDropdownClose}>
              Team
            </MenuItem>
            <MenuItem component={Link} to="/weedingAbout" onClick={handleDropdownClose}>
              About
            </MenuItem>
            <MenuItem component={Link} to="/Testimonial" onClick={handleDropdownClose}>
              Testimonial
            </MenuItem>
          </Menu>

          {/* Admin/User Dashboards */}
          {user?.role === "admin" && (
            <Link to="/dashboard/adminHome" className="hidden md:inline-block text-black hover:text-gray-700">
              Admin Dashboard
            </Link>
          )}
          {user?.role === "attendee" && (
            <Link to="/dashboard/userHome" className="hidden md:inline-block text-black hover:text-gray-700">
              Dashboard
            </Link>
          )}
          {!user && (
            <Link to="/Login" className="hidden md:inline-block text-black hover:text-gray-700">
              Login
            </Link>
          )}
        </div>

        {/* Search Bar */}
        <InputBase
          placeholder="Search..."
          className="bg-white bg-opacity-70 rounded-full px-4 py-1 text-gray-800"
          sx={{ width: 120 }}
        />

        {/* Profile Menu */}
        {user && (
          <div>
            <IconButton onClick={handleMenu} color="inherit">
              <Avatar
                src={user?.imgSrc || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-8 h-8"
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <AccountCircle className="mr-2" /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Settings className="mr-2" /> Settings
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ExitToApp className="mr-2" /> Logout
              </MenuItem>
            </Menu>
          </div>
        )}

        {/* Mobile Drawer */}
        <div className="md:hidden">
          <IconButton onClick={handleDrawerOpen} color="default">
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
            <List>
              <ListItem button component={Link} to="/weedingHome">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/weedingPrice">
                <ListItemText primary="Pricing" />
              </ListItem>
              <ListItem button component={Link} to="/MenuPlanner">
                <ListItemText primary="Menu Planner" />
              </ListItem>
              <ListItem button component={Link} to="/weedingTeam">
                <ListItemText primary="Team" />
              </ListItem>
              <ListItem button component={Link} to="/weedingAbout">
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button component={Link} to="/Testimonial">
                <ListItemText primary="Testimonial" />
              </ListItem>
              <ListItem button component={Link} to="/Reservation">
                <ListItemText primary="Reservation" />
              </ListItem>
            </List>
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default WeedingNavbar;
