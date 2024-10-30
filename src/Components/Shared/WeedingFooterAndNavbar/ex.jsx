

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
    createTheme,
    ThemeProvider,
    useTheme,
    CssBaseline,
} from "@mui/material";
import { AccountCircle, Settings, ExitToApp } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "lucide-react";

// Create light and dark themes
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#6200ea', // Your primary color
        },
        secondary: {
            main: '#03dac6', // Your secondary color
        },
        background: {
            default: '#f5f5f5', // Background color for light theme
            paper: '#ffffff', // Paper color for light theme
        },
        text: {
            primary: '#000', // Primary text color for light theme
            secondary: '#555', // Secondary text color for light theme
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#bb86fc', // Your primary color
        },
        secondary: {
            main: '#03dac6', // Your secondary color
        },
        background: {
            default: '#121212', // Background color for dark theme
            paper: '#1d1d1d', // Paper color for dark theme
        },
        text: {
            primary: '#fff', // Primary text color for dark theme
            secondary: '#ccc', // Secondary text color for dark theme
        },
    },
});

const WeedingNavbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [dropdownAnchor, setDropdownAnchor] = useState(null);
    const [isDarkTheme, setIsDarkTheme] = useState(false); // State for theme toggle

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

    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev); // Toggle theme
    };

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <CssBaseline /> {/* Ensures baseline styles are applied */}
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
                    <Typography variant="h6" component="a" href="/" sx={{ fontWeight: 'bold', color: isDarkTheme ? '#fff' : '#000' }}>
                        Weeding
                    </Typography>

                    {/* Navbar Items */}
                    <div className="flex gap-4 items-center">
                        <Link
                            to="/weeding/weedingHome"
                            className="hidden md:inline-block ml-2"
                            style={{ color: isDarkTheme ? '#fff' : '#000' }}
                        >
                            Home
                        </Link>
                        <Link
                            to="/weeding/weedingPrice"
                            className="hidden md:inline-block ml-2"
                            style={{ color: isDarkTheme ? '#fff' : '#000' }}
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/weeding/MenuPlanner"
                            className="hidden md:inline-block ml-2"
                            style={{ color: isDarkTheme ? '#fff' : '#000' }}
                        >
                            Menu Planner
                        </Link>

                        {/* Dropdown Trigger */}
                        <Box
                            onClick={handleDropdownToggle}
                            className="hidden md:inline-block ml-2"
                            style={{ color: isDarkTheme ? '#fff' : '#000', cursor: 'pointer' }}
                        >
                            Pages
                        </Box>

                        {/* Dropdown Menu */}
                        <Menu
                            anchorEl={dropdownAnchor}
                            open={Boolean(dropdownAnchor)}
                            onClose={handleDropdownClose}
                        >
                            <MenuItem component={Link} to="/weeding/weedingBlogs" onClick={handleDropdownClose}>
                                Blogs
                            </MenuItem>
                            <MenuItem component={Link} to="/weeding/weedingTeam" onClick={handleDropdownClose}>
                                Team
                            </MenuItem>
                            <MenuItem component={Link} to="/weeding/weedingAbout" onClick={handleDropdownClose}>
                                About
                            </MenuItem>
                            <MenuItem component={Link} to="/weeding/Testimonial" onClick={handleDropdownClose}>
                                Testimonial
                            </MenuItem>
                            <MenuItem component={Link} to="/weeding/Reservation" onClick={handleDropdownClose}>
                                Reservation
                            </MenuItem>
                        </Menu>
                        <Link
                            to="/dashboard"
                            className="hidden md:inline-block ml-2"
                            style={{ color: isDarkTheme ? '#fff' : '#000' }}
                        >
                            Dashboard
                        </Link>
                        <Link
                            to="/weeding/Login"
                            className="hidden md:inline-block ml-2"
                            style={{ color: isDarkTheme ? '#fff' : '#000' }}
                        >
                            Login
                        </Link>
                        <Link
                            to="/weeding/Register"
                            className="hidden md:inline-block ml-2"
                            style={{ color: isDarkTheme ? '#fff' : '#000' }}
                        >
                            Register
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <InputBase
                        placeholder="Search..."
                        className="bg-white bg-opacity-70 rounded-full px-4 py-1"
                        sx={{ width: 120, color: isDarkTheme ? '#fff' : '#000' }}
                    />

                    {/* Theme Toggle Button */}
                    <IconButton onClick={toggleTheme} color="inherit">
                        {isDarkTheme ? "🌞" : "🌜"} {/* Change icon based on theme */}
                    </IconButton>

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
                        <Drawer className="px-10" anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
                            <List>
                                <ListItem button component={Link} to="/weeding/weedingHome">
                                    <ListItemText primary="Home" />
                                </ListItem>
                                <ListItem button component={Link} to="/weeding/weedingAbout">
                                    <ListItemText primary="About" />
                                </ListItem>
                                <ListItem button component={Link} to="/weeding/services">
                                    <ListItemText primary="Services" />
                                </ListItem>
                                <ListItem button component={Link} to="/weeding/weedingBlogs">
                                    <ListItemText primary="Blogs" />
                                </ListItem>
                                <ListItem button component={Link} to="/weeding/MenuPlanner">
                                    <ListItemText primary="MenuPlanner" />
                                </ListItem>
                            </List>
                        </Drawer>
                    </div>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default WeedingNavbar;