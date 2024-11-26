'use client';

import { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Typography,
    Grid,
    Tabs,
    Tab,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@mui/material';
import {
    CalendarToday,
    People,
    AttachMoney,
    TrendingUp,
    ArrowForward,
    ArrowDropUp,
    ArrowDropDown,
} from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { toast } from 'react-toastify';

const data = [
    { name: 'Jan', total: 1500 },
    { name: 'Feb', total: 2300 },
    { name: 'Mar', total: 3200 },
    { name: 'Apr', total: 2800 },
    { name: 'May', total: 3600 },
    { name: 'Jun', total: 4200 },
    { name: 'Jul', total: 3800 },
    { name: 'Aug', total: 4600 },
    { name: 'Sep', total: 5200 },
    { name: 'Oct', total: 4800 },
    { name: 'Nov', total: 5500 },
    { name: 'Dec', total: 6200 },
];
const handleReport = () => {
    toast.warning('View Report is not available now...!')
}

export default function UserHome() {
    const [tabValue, setTabValue] = useState('activity');

    return (
        <Box sx={{ padding: 3 }} className="space-y-6">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" component="h1" gutterBottom>
                    Dashboard Overview
                </Typography>
                <Button onClick={handleReport} variant="contained" color="primary" endIcon={<ArrowForward />}>
                    View Reports
                </Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader
                            title="Total Events"
                            subheader="28"
                            avatar={<CalendarToday />}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary">
                                <ArrowDropUp className="text-green-500" /> 2% from last month
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader
                            title="Active Bookings"
                            subheader="189"
                            avatar={<People />}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary">
                                <ArrowDropUp className="text-green-500" /> 12% from last week
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader
                            title="Revenue"
                            subheader="$32,621"
                            avatar={<AttachMoney />}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary">
                                <ArrowDropDown className="text-red-500" /> 4% from last month
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader
                            title="Vendor Satisfaction"
                            subheader="95%"
                            avatar={<TrendingUp />}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary">
                                <ArrowDropUp className="text-green-500" /> 18% from last week
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Card>
                <CardHeader title="Monthly Revenue Overview" />
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <XAxis dataKey="name" />
                            <YAxis tickFormatter={(value) => `$${value}`} />
                            <Tooltip />
                            <Bar dataKey="total" fill="#3f51b5" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            <Tabs value={tabValue} onChange={(event, newValue) => setTabValue(newValue)}>
                <Tab label="Recent Activity" value="activity" />
                <Tab label="Upcoming Events" value="events" />
            </Tabs>

            {tabValue === 'activity' && (
                <Card>
                    <CardContent>
                        <List>
                            {[
                                { name: 'John Doe', action: 'booked a new event', time: '2 hours ago' },
                                { name: 'Alice Smith', action: 'updated her profile', time: '5 hours ago' },
                                { name: 'Robert Johnson', action: 'made a payment', time: '1 day ago' },
                                { name: 'Emily Brown', action: 'cancelled a booking', time: '2 days ago' },
                            ].map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <span className="inline-block h-10 w-10 rounded-full bg-blue-500 text-white text-center leading-10 font-semibold">
                                            {item.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </ListItemIcon>
                                    <ListItemText primary={`${item.name} ${item.action}`} secondary={item.time} />
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            )}

            {tabValue === 'events' && (
                <Card>
                    <CardContent>
                        <List>
                            {[
                                { name: 'Annual Gala', date: 'June 15, 2024', attendees: 200 },
                                { name: 'Tech Conference', date: 'July 22, 2024', attendees: 500 },
                                { name: 'Wedding Ceremony', date: 'August 5, 2024', attendees: 150 },
                                { name: 'Product Launch', date: 'September 10, 2024', attendees: 300 },
                            ].map((event, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={event.name}
                                        secondary={event.date}
                                    />
                                    <ListItemIcon>
                                        <People />
                                        <Typography variant="body2" color="textSecondary">{event.attendees}</Typography>
                                    </ListItemIcon>
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            )}


        </Box>
    );
}
