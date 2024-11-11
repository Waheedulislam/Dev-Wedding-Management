import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/MainHomePage/HomePage/HomePage";
import WeedingLayout from "../Layouts/WeedingLayout";
import WeedingMainHomePage from "../Pages/MainHomePage/WeedingHomePage/WeedingMainHomePage";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/MainHomePage/WeedingHomePage/Services/Services";
import WeedingTeam from "../Pages/MainHomePage/WeedingHomePage/WeedingTeam/WeedingTeam";
import WeedingPricing from "../Pages/MainHomePage/WeedingHomePage/WeedingPricing/WeedingPricing";
import WeedingAbout from "../Pages/MainHomePage/WeedingHomePage/WeedingAbout/WeedingAbout";
import MenuPlanner from "../Pages/MainHomePage/WeedingHomePage/MenuPlanner/MenuPlanner";

import Testimonial from "../Pages/MainHomePage/WeedingHomePage/weedingTestimonial/Testimonial";
import WeedingReservation from "../Pages/MainHomePage/WeedingHomePage/WeedingReservation/WeedingReservation";
import Login from "../Components/LoginRegister/Login/Login";
import Register from "../Components/LoginRegister/Register/Register";
import ResponsiveDrawer from "../Layouts/DashboardLayout";

import EventManagement from "../Pages/MainHomePage/WeedingHomePage/Dashboard/EventManagement";
import EventDetail from "../Pages/MainHomePage/WeedingHomePage/WeedingHomeComponents/EventDetail/EventDetail";
import ErrorPage from "../Components/Error/ErrorPage";
import UserHome from "../Pages/MainHomePage/WeedingHomePage/Dashboard/User/UserHome";
import AdminHome from "../Pages/MainHomePage/WeedingHomePage/Dashboard/Admin/AdminHome/AdminHome";
import AllUser from "../Pages/MainHomePage/WeedingHomePage/Dashboard/Admin/AllUser/AllUser";
import Event from "../Pages/MainHomePage/WeedingHomePage/Dashboard/Admin/Event/Event";
import Bookings from "../Pages/MainHomePage/WeedingHomePage/Dashboard/Admin/Bookings/Bookings";
import Payments from "../Pages/MainHomePage/WeedingHomePage/Dashboard/Admin/Payments/Payments";
import Reports from "../Pages/MainHomePage/WeedingHomePage/Dashboard/Admin/Reports/Reports";
import Settings from "../Pages/MainHomePage/WeedingHomePage/Dashboard/Admin/Settings/Settings";
import UserEvents from "../Pages/MainHomePage/WeedingHomePage/Dashboard/User/UserEvents";
import UserMessagesNotifications from "../Pages/MainHomePage/WeedingHomePage/Dashboard/User/UserMessagesNotifications";
import UserPayments from "../Pages/MainHomePage/WeedingHomePage/Dashboard/User/UserPayments";
import UserBookings from "../Pages/MainHomePage/WeedingHomePage/Dashboard/User/UserBookings";
import ProfilePage from "../Pages/MainHomePage/WeedingHomePage/Dashboard/User/UserProfile";
import PlanPayment from "../Pages/MainHomePage/WeedingHomePage/PlanPayment/PlanPayment";
import WeedingBlog from "../Pages/MainHomePage/WeedingHomePage/WeedingBlog/WeedingBlog";
import BlogDetailsCard from "../Pages/MainHomePage/WeedingHomePage/WeedingBlog/BlogsDetails/BlogDetailsCard";
import WeedingGallery from "../Pages/MainHomePage/WeedingHomePage/WeedingBlog/WeedingGallery/WeedingGallery";



const router = createBrowserRouter([
  // Main Home Page Route
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      }, // index route for the main page
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  // Weeding Page Route
  {
    path: "/weeding",
    element: <WeedingLayout />,

    children: [
      { path: "weedingHome", element: <WeedingMainHomePage /> },
      { path: "services", element: <Services /> },
      { path: "weedingTeam", element: <WeedingTeam /> },
      { path: "weedingPrice", element: <WeedingPricing /> },
      { path: "weedingBlogs", element: <WeedingBlog /> },
      { path: "weedingBlogs/:id", element: <BlogDetailsCard /> },
      { path: "weedingAbout", element: <WeedingAbout /> },
      { path: "MenuPlanner", element: <MenuPlanner /> },
      { path: "Testimonial", element: <Testimonial /> },
      { path: "Reservation", element: <WeedingReservation /> },
      { path: "Gallery", element: <WeedingGallery /> },
      { path: "Login", element: <Login /> },
      { path: "Register", element: <Register /> },
      { path: "/weeding/payment/:planId", element: < PlanPayment /> },
    ],
  },
  // weeding Dashboard Route
  {
    path: "/dashboard",
    element: <ResponsiveDrawer />,
    children: [
      // user Dashboard Route
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "userEvents",
        element: <UserEvents />,
      },
      {
        path: "userMessages",
        element: <UserMessagesNotifications />,
      },
      {
        path: "userPayments",
        element: <UserPayments />,
      },
      {
        path: "userBookings",
        element: <UserBookings />,
      },
      {
        path: "userProfile",
        element: <ProfilePage />,
      },
      // Admin Dashboard Route
      {
        path: 'adminHome',
        element: <AdminHome />
      },
      {
        path: 'all-Users',
        element: <AllUser />
      },
      {
        path: 'events',
        element: <Event />
      },
      {
        path: 'Reports',
        element: <Reports />
      },
      {
        path: 'payments',
        element: <Payments />
      },
      {
        path: 'bookings',
        element: <Bookings />
      },
      {
        path: 'Settings',
        element: <Settings />
      },
      {
        path: "event-management",
        element: <EventManagement />,
      },
      {
        path: "event-management/:id",
        element: <EventDetail />,
      },
    ],
  },
]);

export default router;
