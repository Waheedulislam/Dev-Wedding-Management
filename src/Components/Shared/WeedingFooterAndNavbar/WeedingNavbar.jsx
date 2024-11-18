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
  Box,
  Button,
} from "@mui/material";
import {
  AccountCircle,
  Settings,
  ExitToApp,
  LogoutOutlined,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import { AuthContext } from "../../../Providers/AuthProvider";

const WeedingNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownAnchor, setDropdownAnchor] = useState(null);

  const { user, logout } = useContext(AuthContext);

  const handleMenu = (event) => {
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

  const handleDropdownToggle = (event) => {
    setDropdownAnchor((prev) => (prev ? null : event.currentTarget));
  };

  const handleDropdownClose = () => {
    setDropdownAnchor(null);
  };

  const handleLogout = () => {
    logout();
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
      <Toolbar className="flex justify-between container mx-auto items-center">
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
            to="/weedingHome"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/weedingPrice"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Pricing
          </Link>
          <Link
            to="/MenuPlanner"
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Menu Planner
          </Link>

          {/* Dropdown Trigger */}
          <Box
            onClick={handleDropdownToggle}
            className="hidden md:inline-block ml-2 text-black hover:text-gray-700 cursor-pointer transition duration-300 ease-in-out"
          >
            Pages
          </Box>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={dropdownAnchor}
            open={Boolean(dropdownAnchor)}
            onClose={handleDropdownClose}
          >
            <MenuItem
              component={Link}
              to="/weedingBlogs"
              onClick={handleDropdownClose}
            >
              Blogs
            </MenuItem>
            <MenuItem
              component={Link}
              to="/weedingTeam"
              onClick={handleDropdownClose}
            >
              Team
            </MenuItem>
            <MenuItem
              component={Link}
              to="/weedingAbout"
              onClick={handleDropdownClose}
            >
              About
            </MenuItem>
            <MenuItem
              component={Link}
              to="/Testimonial"
              onClick={handleDropdownClose}
            >
              Testimonial
            </MenuItem>
            <MenuItem
              component={Link}
              to="/Reservation"
              onClick={handleDropdownClose}
            >
              Reservation
            </MenuItem>
          </Menu>
          {user && user.role === "admin" && (
            <Link
              to="/dashboard/adminHome"
              className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
            >
              Admin Dashboard
            </Link>
          )}
          {user && user.role === "attendee" && (
            <Link
              to="/dashboard/userHome"
              className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
            >
              User Dashboard
            </Link>
          )}
          <Link
            to="#"
            className="hidden md:inline-block ml-2 text-black border hover:text-gray-700 transition duration-300 ease-in-out"
          >
            {user?.name} <br />
            {user?.email}
          </Link>

          {user ? (
            <Button
              onClick={handleLogout} // Removed the parentheses to pass the function reference
              type="button"
              className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
            >
              <LogoutOutlined />
            </Button>
          ) : (
            <Link
              to="/Login"
              className="hidden md:inline-block ml-2 text-black hover:text-gray-700 transition duration-300 ease-in-out"
            >
              Login
            </Link>
          )}
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

        {/* Mobile Drawer */}
        <div className="flex gap-4 items-center md:hidden">
          <IconButton onClick={handleDrawerOpen} color="default">
            <MenuIcon />
          </IconButton>
          <Drawer
            className="px-10"
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerClose}
          >
            <List>
              <ListItem button component={Link} to="/weedingHome">
                <ListItemText primary="Home" />
              </ListItem>

              <ListItem
                component={Link}
                to="/weedingPrice"
                className="hidden md:inline-block  text-black hover:text-gray-700 transition duration-300 ease-in-out"
              >
                Pricing
              </ListItem>

              <ListItem button component={Link} to="/weedingBlogs">
                <ListItemText primary="Blogs" />
              </ListItem>

              <ListItem button component={Link} to="/MenuPlanner">
                <ListItemText primary="MenuPlanner" />
              </ListItem>

              <ListItem
                component={Link}
                to="/weeding/weedingTeam"
                onClick={handleDropdownClose}
              >
                Team
              </ListItem>
              <ListItem
                component={Link}
                to="/weeding/weedingAbout"
                onClick={handleDropdownClose}
              >
                About
              </ListItem>
              <ListItem
                component={Link}
                to="/weeding/Testimonial"
                onClick={handleDropdownClose}
              >
                Testimonial
              </ListItem>
              <ListItem
                component={Link}
                to="/weeding/Reservation"
                onClick={handleDropdownClose}
              >
                Reservation
              </ListItem>
            </List>

          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default WeedingNavbar;
