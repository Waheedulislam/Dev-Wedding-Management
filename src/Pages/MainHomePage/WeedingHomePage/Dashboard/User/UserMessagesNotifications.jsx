
import { User, Bell, Shield, CreditCard } from 'lucide-react'
import { useState } from 'react'
import { Button, TextField, Typography, Box, Card, CardContent, CardHeader, Tabs, Tab, Switch } from '@mui/material'


const UserMessagesNotifications = () => {
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        sms: true,
    })

    const [tabValue, setTabValue] = useState('account'); // State for the current tab

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    return (
        <div>
            <Tabs value={tabValue} onChange={handleTabChange} sx={{ mt: 4 }}>
                <Tab label="Account" value="account" icon={<User />} iconPosition="start" />
                <Tab label="Notifications" value="notifications" icon={<Bell />} iconPosition="start" />
                <Tab label="Security" value="security" icon={<Shield />} iconPosition="start" />
            </Tabs>

            {tabValue === 'account' && (
                <Box sx={{ mt: 2 }}>
                    <Card>
                        <CardHeader title="Account Settings" />
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CreditCard size={20} />
                                    <Typography variant="body1" sx={{ ml: 1 }}>Subscription Plan</Typography>
                                </Box>
                                <Typography variant="body1" color="primary">Pro Plan</Typography>
                            </Box>
                            <Button variant="outlined" fullWidth>Manage Subscription</Button>
                        </CardContent>
                    </Card>
                </Box>
            )}

            {tabValue === 'notifications' && (
                <Box sx={{ mt: 2 }}>
                    <Card>
                        <CardHeader title="Notification Preferences" />
                        <CardContent>
                            {['email', 'push', 'sms'].map((type) => (
                                <Box key={type} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography variant="body1" sx={{ ml: 1 }}>
                                            {type === 'email' ? 'Email Notifications' : type === 'push' ? 'Push Notifications' : 'SMS Notifications'}
                                        </Typography>
                                    </Box>
                                    <Switch
                                        checked={notifications[type]}
                                        onChange={() => setNotifications(prev => ({ ...prev, [type]: !prev[type] }))}
                                    />
                                </Box>
                            ))}
                        </CardContent>
                    </Card>
                </Box>
            )}

            {tabValue === 'security' && (
                <Box sx={{ mt: 2 }}>
                    <Card>
                        <CardHeader title="Security Settings" />
                        <CardContent>
                            <TextField label="Current Password" type="password" fullWidth variant="outlined" sx={{ mb: 2 }} />
                            <TextField label="New Password" type="password" fullWidth variant="outlined" sx={{ mb: 2 }} />
                            <TextField label="Confirm New Password" type="password" fullWidth variant="outlined" sx={{ mb: 2 }} />
                            <Button variant="contained" color="primary" fullWidth>Change Password</Button>
                        </CardContent>
                    </Card>
                </Box>
            )}
        </div>
    );
};

export default UserMessagesNotifications;