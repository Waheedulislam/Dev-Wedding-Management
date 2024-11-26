// 'use client'

import { useContext, useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar'
import Switch from '@mui/material/Switch'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { User, Mail, Phone, Bell, Shield, Camera, Check } from 'lucide-react'
import { AuthContext } from '../../../../../Providers/AuthProvider'

export default function ProfilePage() {
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        sms: true,
    })
    const [tab, setTab] = useState(0)
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    })

    const handleTabChange = (event, newValue) => {
        setTab(newValue)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserInfo((prev) => ({ ...prev, [name]: value }))
    }
    const { user } = useContext(AuthContext);
    console.log(user)
    // Here you can add the save logic (e.g., API call to save data)
    const handleSubmit = () => {
        console.log("User info saved:", userInfo)
    }
    const changePassword = () => {

        console.log("User password change:", userInfo)
    }

    return (
        <div className="space-y-6">
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardContent className="p-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Avatar alt="User avatar" src={user?.imgSrc} sx={{ width: 80, height: 80 }} />
                    <div className="flex flex-col space-y-2">
                        <Typography variant="h5" className="text-gray-800 font-semibold">{user?.name}</Typography>
                        <Typography variant="body2" className="text-gray-500 dark:text-gray-400">{user?.email}</Typography>
                        <Button variant="outlined" startIcon={<Camera />}>Change Avatar</Button>
                    </div>
                </CardContent>
            </Card>

            <Tabs value={tab} onChange={handleTabChange} className="rounded-lg">
                <Tab icon={<User />} label="Personal" />
                <Tab icon={<Bell />} label="Notifications" />
                <Tab icon={<Shield />} label="Security" />
            </Tabs>

            {tab === 0 && (
                <form onSubmit={handleSubmit}>
                    <Card className="bg-white dark:bg-gray-800 shadow-lg">
                        <CardHeader title="Personal Information" className="text-xl font-semibold text-gray-800 dark:text-white" />
                        <CardContent className="space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <TextField
                                    label="First Name"
                                    name="firstName"
                                    placeholder="John"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={userInfo.firstName}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    label="Last Name"
                                    name="lastName"
                                    placeholder="Doe"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={userInfo.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="john.doe@example.com"
                                variant="outlined"
                                fullWidth
                                required
                                value={userInfo.email}
                                onChange={handleInputChange}
                            />
                            <TextField
                                label="Phone"
                                name="phone"
                                type="tel"
                                placeholder="+1 (555) 123-4567"
                                variant="outlined"
                                fullWidth
                                required
                                value={userInfo.phone}
                                onChange={handleInputChange}
                            />
                        </CardContent>
                        <div className="flex justify-end p-4">
                            <Button variant="contained" fullWidth color="primary" startIcon={<Check />} type='submit'>
                                Save Changes
                            </Button>
                        </div>
                    </Card>
                </form>
            )}

            {tab === 1 && (
                <Card className="bg-white dark:bg-gray-800 shadow-lg">
                    <CardHeader title="Notification Preferences" className="text-xl font-semibold text-gray-800 dark:text-white" />
                    <CardContent className="space-y-4">
                        {['Email', 'Push', 'SMS'].map((type, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    {type === 'Email' && <Mail className="h-5 w-5 " />}
                                    {type === 'Push' && <Bell className="h-5 w-5 " />}
                                    {type === 'SMS' && <Phone className="h-5 w-5 " />}
                                    <span >{type} Notifications</span>
                                </div>
                                <Switch
                                    checked={notifications[type.toLowerCase()]}
                                    onChange={() => setNotifications((prev) => ({ ...prev, [type.toLowerCase()]: !prev[type.toLowerCase()] }))}
                                    color="primary"
                                />
                            </div>
                        ))}
                    </CardContent>
                </Card>
            )}

            {tab === 2 && (
                <form onSubmit={changePassword}>
                    <Card className="bg-white dark:bg-gray-800 shadow-lg">
                        <CardHeader title="Security Settings" className="text-xl font-semibold text-gray-800 dark:text-white" />
                        <CardContent className="space-y-4">
                            <TextField label="Current Password" type="password" variant="outlined" fullWidth required />
                            <TextField label="New Password" type="password" variant="outlined" fullWidth required />
                            <TextField label="Confirm New Password" type="password" variant="outlined" fullWidth required />
                            <Button variant="contained" type='submit' color="primary" fullWidth>Change Password</Button>
                        </CardContent>
                    </Card>
                </form>
            )}
        </div>
    )
}
