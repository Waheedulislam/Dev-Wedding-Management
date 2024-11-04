import React from 'react';
import { Card, CardContent, CardHeader, Typography, Tab, Tabs } from "@mui/material";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Calendar, DollarSign, Users } from 'lucide-react';



const revenueData = [
    { name: "Jan", total: 1500 },
    { name: "Feb", total: 2300 },
    { name: "Mar", total: 3200 },
    { name: "Apr", total: 2800 },
    { name: "May", total: 3500 },
    { name: "Jun", total: 4000 },
    { name: "Jul", total: 4500 },
];

const userEngagementData = [
    { name: "Week 1", users: 200 },
    { name: "Week 2", users: 250 },
    { name: "Week 3", users: 300 },
    { name: "Week 4", users: 280 },
    { name: "Week 5", users: 320 },
    { name: "Week 6", users: 350 },
    { name: "Week 7", users: 380 },
];

export default function AdminHome() {
    const [value, setValue] = React.useState('revenue');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className=" p-6 min-h-screen">
            <h1 className="lg:text-5xl text-2xl text-center font-semibold lg:mt-0 mt-10 mb-4 ">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Card for Total Revenue */}
                <Card className="bg-blue-50 border border-blue-200 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                    <CardHeader
                        className="flex flex-row items-center justify-between "
                        title={<Typography variant="subtitle2" className="text-blue-600 font-semibold">Total Revenue</Typography>}
                        action={<DollarSign className="h-5 w-5 text-blue-600" />}
                    />
                    <CardContent>
                        <Typography variant="h5" className="font-bold text-blue-800">$45,231.89</Typography>
                        <Typography variant="body2" className="text-gray-600 ">+20.1% from last month</Typography>
                    </CardContent>
                </Card>

                {/* Card for New Users */}
                <Card className="bg-green-50 border border-green-200 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                    <CardHeader
                        className="flex flex-row items-center justify-between pb-2"
                        title={<Typography variant="subtitle2" className="text-green-600 font-semibold">New Users</Typography>}
                        action={<Users className="h-5 w-5 text-green-600" />}
                    />
                    <CardContent>
                        <Typography variant="h5" className="font-bold text-green-800">+2,350</Typography>
                        <Typography variant="body2" className="text-gray-600">+180.1% from last month</Typography>
                    </CardContent>
                </Card>

                {/* Card for Total Bookings */}
                <Card className="bg-purple-50 border border-purple-200 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                    <CardHeader
                        className="flex flex-row items-center justify-between pb-2"
                        title={<Typography variant="subtitle2" className="text-purple-600 font-semibold">Total Bookings</Typography>}
                        action={<Calendar className="h-5 w-5 text-purple-600" />}
                    />
                    <CardContent>
                        <Typography variant="h5" className="font-bold text-purple-800">12,234</Typography>
                        <Typography variant="body2" className="text-gray-600">+19% from last month</Typography>
                    </CardContent>
                </Card>

                {/* Card for Active Events */}
                <Card className="bg-red-50 border border-red-200 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                    <CardHeader
                        className="flex flex-row items-center justify-between pb-2"
                        title={<Typography variant="subtitle2" className="text-red-600 font-semibold">Active Events</Typography>}
                        action={<BarChart className="h-5 w-5 text-red-600" />}
                    />
                    <CardContent>
                        <Typography variant="h5" className="font-bold text-red-800">573</Typography>
                        <Typography variant="body2" className="text-gray-600">+201 from last week</Typography>
                    </CardContent>
                </Card>
            </div>

            <div>

                <Tabs value={value} onChange={handleChange} className="mb-4">
                    <Tab label="Revenue" value="revenue" />
                    <Tab label="User Engagement" value="users" />
                </Tabs>
                {value === 'revenue' && (
                    <Card className="mb-6">
                        <CardHeader>
                            <Typography variant="h5">Revenue Overview</Typography>
                            <Typography variant="body2">Monthly revenue for the current year</Typography>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <ResponsiveContainer width="100%" height={350}>
                                <BarChart data={revenueData}>
                                    <XAxis
                                        dataKey="name"
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(value) => `$${value}`}
                                    />
                                    <Tooltip />
                                    <Bar dataKey="total" fill="#4caf50" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                )}
                {value === 'users' && (
                    <Card className="mb-6">
                        <CardHeader>
                            <Typography variant="h5">User Engagement</Typography>
                            <Typography variant="body2">Weekly active users over the past 7 weeks</Typography>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <ResponsiveContainer width="100%" height={350}>
                                <LineChart data={userEngagementData}>
                                    <XAxis
                                        dataKey="name"
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="users" stroke="#3f51b5" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                )}
            </div>

        </div>
    );
}
