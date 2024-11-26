import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import BookIcon from "@mui/icons-material/Book";
import PaymentIcon from "@mui/icons-material/Payment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import AdminDashboardLayoutNavbar from "../Components/Shared/WeedingFooterAndNavbar/AdminDashboardLayoutNavbar";
import { ManageAccounts } from "@mui/icons-material";
import { LogOut } from "lucide-react";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import { Snackbar } from "@mui/material";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const { user, loading, logout } = useContext(AuthContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(`/dashboard/${path}`);
  };

  const handleLogout = () => {
    logout();
  };
  // Check if the user is an admin
  const isAdmin = user?.role === "admin";

  const adminDrawerContent = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "adminHome" },
    {
      text: "Event Management",
      icon: <ManageAccounts />,
      path: "event-management",
    },
    { text: "Users", icon: <PeopleIcon />, path: "all-Users" },
    { text: "Bookings", icon: <BookIcon />, path: "bookings" },
    { text: "Payments", icon: <PaymentIcon />, path: "payments" },
    { text: "Reports", icon: <AssessmentIcon />, path: "reports" },
    { text: "Settings", icon: <SettingsIcon />, path: "settings" },
  ];

  const userDrawerContent = [
    { text: "Dashboard Overview", icon: <DashboardIcon />, path: "userHome" },
    { text: "My Reservation", icon: <EventIcon />, path: "userReservation" },
    { text: "Booking Status", icon: <BookIcon />, path: "userBookings" },
    { text: "Profile Settings", icon: <PersonIcon />, path: "userProfile" },
    {
      text: "Payments & Invoices",
      icon: <PaymentIcon />,
      path: "userPayments",
    },
    {
      text: "Messages & Notifications",
      icon: <MessageIcon />,
      path: "userMessages",
    },

  ];

  if (loading) {
    return <Snackbar open={loading} message="Loading..." />;
  }

  const drawerContent = isAdmin ? adminDrawerContent : userDrawerContent;

  const drawer = (
    <div>
      <Toolbar>
        <Link to='/'>
          <h1 className="text-3xl font-semibold">
            Wedding <span className="text-blue-800">Pro</span>
          </h1>
        </Link>
      </Toolbar>
      <Divider />
      <List>
        {drawerContent.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(path)}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                },
                "&.Mui-selected": {
                  backgroundColor: "rgba(0, 0, 0, 0.15)",
                  color: "primary.main",
                },
                padding: "10px 20px",
                fontSize: "16px",
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List
        sx={{
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.08)",
          },
          "&.Mui-selected": {
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            color: "primary.main",
          },
          padding: "10px 20px",
          fontSize: "16px",
        }}
        className="flex items-center"
      >
        <div onClick={handleLogout} className="flex items-center cursor-pointer">
          <LogOut className="h-6 w-6" />
          <span className="text-xl ml-2 ">Log out</span>
        </div>

      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <AdminDashboardLayoutNavbar />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
