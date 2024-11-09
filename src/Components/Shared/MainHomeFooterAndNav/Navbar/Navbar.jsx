import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';  // Import Link

const pages = [
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
];
const eventOptions = [
    { name: 'Wedding Events', link: '/weeding/weedingHome' },
    // { name: 'Upcoming Events', link: '/upcoming-events' },
    // { name: 'Event Highlights', link: '/event-highlights' }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElEvents, setAnchorElEvents] = React.useState(null);

    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleOpenEventsMenu = (event) => setAnchorElEvents(event.currentTarget);

    const handleCloseNavMenu = () => setAnchorElNav(null);
    const handleCloseUserMenu = () => setAnchorElUser(null);
    const handleCloseEventsMenu = () => setAnchorElEvents(null);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    {/* Mobile Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography
                                        component={Link}
                                        to={page.link}
                                        sx={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}
                                    >
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                            <MenuItem onClick={handleOpenEventsMenu}>
                                <Typography sx={{ textAlign: 'center' }}>Events</Typography>
                            </MenuItem>
                            <Menu
                                id="menu-events-mobile"
                                anchorEl={anchorElEvents}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElEvents)}
                                onClose={handleCloseEventsMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {eventOptions.map((eventOption) => (
                                    <MenuItem key={eventOption.name} onClick={handleCloseEventsMenu}>
                                        <Typography
                                            component={Link}
                                            to={eventOption.link}
                                            sx={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}
                                        >
                                            {eventOption.name}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Menu>
                    </Box>

                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    {/* Desktop Menu */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: { md: 'center' },
                            gap: 3,
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link}
                                to={page.link}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    fontWeight: '600',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    },
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                        <Button
                            onClick={handleOpenEventsMenu}
                            sx={{
                                my: 2,
                                color: 'white',
                                display: 'block',
                                fontWeight: '600',
                                textTransform: 'capitalize',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                },
                            }}
                        >
                            Events
                        </Button>
                        <Menu
                            id="menu-events"
                            anchorEl={anchorElEvents}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElEvents)}
                            onClose={handleCloseEventsMenu}
                        >
                            {eventOptions.map((eventOption) => (
                                <MenuItem key={eventOption.name} onClick={handleCloseEventsMenu}>
                                    <Typography
                                        component={Link}
                                        to={eventOption.link}
                                        sx={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}
                                    >
                                        {eventOption.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* User Menu */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 2 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
