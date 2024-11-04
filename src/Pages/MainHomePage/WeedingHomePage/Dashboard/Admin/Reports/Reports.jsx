



import { Card, CardContent, CardHeader, Typography, } from "@mui/material";
import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 200 },
    { name: 'Apr', value: 278 },
    { name: 'May', value: 189 },
    { name: 'Jun', value: 239 },
];

export default function ReportsPage() {


    return (
        <div>
            <h1 className="text-5xl text-center font-semibold  my-10">Analytics & Reports</h1>

            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                <CardHeader
                    title={<Typography variant="h6" className="text-gray-800">Monthly Revenue</Typography>}
                />
                <CardContent>
                    <ResponsiveContainer width="100%" height={350}>
                        <RechartsBarChart data={data}>
                            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                            <Tooltip />
                            {/* Changed bar color to green */}
                            <Bar dataKey="value" fill="#28a745" radius={[4, 4, 0, 0]} /> {/* A shade of green */}
                        </RechartsBarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
}
