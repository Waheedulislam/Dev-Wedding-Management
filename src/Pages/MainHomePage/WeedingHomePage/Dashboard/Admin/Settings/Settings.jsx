// src/Pages/MainHomePage/WeedingHomePage/Dashboard/Admin/Settings/Settings.jsx
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button, TextField, Card, CardContent, Typography, Divider } from "@mui/material";
import { toast } from "react-toastify"; // Correctly import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const settingsFormSchema = z.object({
    siteName: z.string().min(2, {
        message: "Site name must be at least 2 characters.",
    }),
    siteDescription: z.string().max(160, {
        message: "Site description must not be longer than 160 characters.",
    }),
    contactEmail: z.string().email({
        message: "Please enter a valid email address.",
    }),
    supportPhone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
});

const defaultValues = {
    siteName: "My Event Platform",
    siteDescription: "The best place to host and find amazing events.",
    contactEmail: "contact@myeventplatform.com",
    supportPhone: "+1 (555) 123-4567",
};

export default function Settings() {
    const form = useForm({
        resolver: zodResolver(settingsFormSchema),
        defaultValues,
    });

    const onSubmit = (data) => {
        toast.success("Settings saved successfully!", {
            autoClose: 3000,
            position: toast.POSITION.TOP_RIGHT,
        });
        console.log("Submitted data:", data);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
            <Card className="w-full max-w-lg shadow-lg">
                <CardContent>
                    <Typography variant="h4" component="h1" className="text-center font-semibold mb-4">
                        Settings
                    </Typography>
                    <Divider className="mb-4" />

                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {/* Site Name */}
                        <TextField
                            label="Site Name"
                            variant="outlined"
                            fullWidth
                            {...form.register("siteName")}
                            error={!!form.formState.errors.siteName}
                            helperText={form.formState.errors.siteName?.message || "This is the name that will be displayed on your site."}
                        />

                        {/* Site Description */}
                        <TextField
                            label="Site Description"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={3}
                            {...form.register("siteDescription")}
                            error={!!form.formState.errors.siteDescription}
                            helperText={form.formState.errors.siteDescription?.message || "This description will be used for SEO purposes."}
                        />

                        {/* Contact Email */}
                        <TextField
                            label="Contact Email"
                            variant="outlined"
                            fullWidth
                            {...form.register("contactEmail")}
                            error={!!form.formState.errors.contactEmail}
                            helperText={form.formState.errors.contactEmail?.message || "This email will be used for site-wide contact purposes."}
                        />

                        {/* Support Phone */}
                        <TextField
                            label="Support Phone"
                            variant="outlined"
                            fullWidth
                            {...form.register("supportPhone")}
                            error={!!form.formState.errors.supportPhone}
                            helperText={form.formState.errors.supportPhone?.message || "This phone number will be used for customer support."}
                        />

                        {/* Submit Button */}
                        <Button variant="contained" color="primary" type="submit" fullWidth className="mt-4">
                            Save changes
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
