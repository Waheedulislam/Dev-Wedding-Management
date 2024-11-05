
// import { Button, TextField, Typography, Box, Card, CardContent, CardHeader } from '@mui/material'
// import Avatar from '@mui/material/Avatar'

// export default function UserHome() {


//     return (
//         <Box sx={{ p: 4 }}>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
//                 <Typography variant="h4" component="h1">Profile Settings</Typography>
//                 <Button variant="contained" color="primary">Save Changes</Button>
//             </Box>

//             <Card>
//                 <CardHeader title="Personal Information" />
//                 <CardContent>
//                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
//                         <Avatar src="https://github.com/shadcn.png" alt="User avatar" sx={{ width: 80, height: 80, marginRight: 2 }} />
//                         <Button variant="outlined">Change Avatar</Button>
//                     </Box>
//                     <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
//                         <TextField label="First Name" placeholder="John" fullWidth variant="outlined" />
//                         <TextField label="Last Name" placeholder="Doe" fullWidth variant="outlined" />
//                     </Box>
//                     <TextField label="Email" type="email" placeholder="john.doe@example.com" fullWidth variant="outlined" sx={{ mt: 2 }} />
//                     <TextField label="Phone" type="tel" placeholder="+1 (555) 123-4567" fullWidth variant="outlined" sx={{ mt: 2 }} />
//                 </CardContent>
//             </Card>


//         </Box>
//     )
// }
import { useState } from 'react'
import { Card, CardContent, CardHeader, Typography, Box, Button, Avatar, LinearProgress } from '@mui/material'
import { CalendarToday, AttachMoney, Group, ArrowForward, BarChart, TrendingUp } from '@mui/icons-material'

export default function UserHome() {
    const [progress] = useState(67)

    return (
        <Box sx={{ p: 4 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <Typography variant="h4" component="h1" color="text.primary">Dashboard Overview</Typography>
                <Button variant="contained" color="primary" endIcon={<ArrowForward />}>
                    View Reports
                </Button>
            </Box>

            <Box display="grid" gap={3} gridTemplateColumns={{ xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
                <Card variant="outlined">
                    <CardHeader
                        title="Total Events"
                        action={<CalendarToday color="primary" />}
                    />
                    <CardContent>
                        <Typography variant="h5">28</Typography>
                        <Typography variant="body2" color="success.main">+2% from last month</Typography>
                    </CardContent>
                </Card>

                <Card variant="outlined">
                    <CardHeader
                        title="Active Bookings"
                        action={<Group color="secondary" />}
                    />
                    <CardContent>
                        <Typography variant="h5">189</Typography>
                        <Typography variant="body2" color="success.main">+12% from last week</Typography>
                    </CardContent>
                </Card>

                <Card variant="outlined">
                    <CardHeader
                        title="Revenue"
                        action={<AttachMoney color="success" />}
                    />
                    <CardContent>
                        <Typography variant="h5">$32,621</Typography>
                        <Typography variant="body2" color="error.main">-4% from last month</Typography>
                    </CardContent>
                </Card>

                <Card variant="outlined">
                    <CardHeader
                        title="Vendor Satisfaction"
                        action={<TrendingUp color="warning" />}
                    />
                    <CardContent>
                        <Typography variant="h5">95%</Typography>
                        <LinearProgress variant="determinate" value={progress} sx={{ height: 8, mt: 2 }} />
                    </CardContent>
                </Card>
            </Box>

            <Box display="grid" gap={3} gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} mt={4}>
                <Card variant="outlined">
                    <CardHeader
                        title="Recent Activity"
                    />
                    <CardContent>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            {[
                                { name: "John Doe", action: "booked a new event", time: "2 hours ago" },
                                { name: "Alice Smith", action: "updated her profile", time: "5 hours ago" },
                                { name: "Robert Johnson", action: "made a payment", time: "1 day ago" },
                                { name: "Emily Brown", action: "cancelled a booking", time: "2 days ago" },
                            ].map((item, index) => (
                                <Box component="li" key={index} display="flex" alignItems="center" mb={2}>
                                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>{item.name.split(' ').map(n => n[0]).join('')}</Avatar>
                                    <Box>
                                        <Typography variant="body1" color="text.primary">{item.name} {item.action}</Typography>
                                        <Typography variant="caption" color="text.secondary">{item.time}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </CardContent>
                </Card>

                <Card variant="outlined">
                    <CardHeader
                        title="Upcoming Events"
                    />
                    <CardContent>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            {[
                                { name: "Annual Gala", date: "June 15, 2024", attendees: 200 },
                                { name: "Tech Conference", date: "July 22, 2024", attendees: 500 },
                                { name: "Wedding Ceremony", date: "August 5, 2024", attendees: 150 },
                                { name: "Product Launch", date: "September 10, 2024", attendees: 300 },
                            ].map((event, index) => (
                                <Box component="li" key={index} display="flex" justifyContent="space-between" mb={2}>
                                    <Box>
                                        <Typography variant="body1" color="text.primary">{event.name}</Typography>
                                        <Typography variant="body2" color="text.secondary">{event.date}</Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <Group fontSize="small" color="action" />
                                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>{event.attendees}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            </Box>

            <Card variant="outlined" sx={{ mt: 4 }}>
                <CardHeader
                    title="Monthly Revenue Overview"
                />
                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 320 }}>
                    <BarChart fontSize="large" color="action" />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>Revenue chart placeholder</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}
