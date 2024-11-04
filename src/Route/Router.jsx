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
import WeedingBlogs from "../Pages/MainHomePage/WeedingHomePage/WeedingBlogs/WeedingBlogs";
import WeedingAbout from "../Pages/MainHomePage/WeedingHomePage/WeedingAbout/WeedingAbout";
import MenuPlanner from "../Pages/MainHomePage/WeedingHomePage/MenuPlanner/MenuPlanner";
import BlogDetails from "../Pages/MainHomePage/WeedingHomePage/WeedingBlogs/BlogsDetails/BlogDetails";
import Testimonial from "../Pages/MainHomePage/WeedingHomePage/weedingTestimonial/Testimonial";
import WeedingReservation from "../Pages/MainHomePage/WeedingHomePage/WeedingReservation/WeedingReservation";
import Login from "../Components/LoginRegister/Login/Login";
import Register from "../Components/LoginRegister/Register/Register";
import Dashboar from "../Pages/MainHomePage/WeedingHomePage/Dashboard/Dashboar";
import Draft from "../Pages/MainHomePage/WeedingHomePage/Dashboard/Draft"; // Ensure this component exists
import ResponsiveDrawer from "../Layouts/DashboardLayout";
import WeedingGallery from "../Pages/MainHomePage/WeedingHomePage/WeedingGallery/WeedingGallery";
import EventManagement from "../Pages/MainHomePage/WeedingHomePage/Dashboard/EventManagement";
import EventDetail from "../Pages/MainHomePage/WeedingHomePage/WeedingHomeComponents/EventDetail/EventDetail";
import ErrorPage from "../Components/Error/ErrorPage";

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
      { path: "weedingBlogs", element: <WeedingBlogs /> },
      { path: "weedingBlogs/:id", element: <BlogDetails /> },
      { path: "weedingAbout", element: <WeedingAbout /> },
      { path: "MenuPlanner", element: <MenuPlanner /> },
      { path: "Testimonial", element: <Testimonial /> },
      { path: "Reservation", element: <WeedingReservation /> },
      { path: "Gallery", element: <WeedingGallery /> },
      { path: "Login", element: <Login /> },
      { path: "Register", element: <Register /> },
    ],
  },
  // weeding Dashboard Route
  {
    path: "/dashboard",
    element: <ResponsiveDrawer />,
    children: [
      {
        path: "home", // relative path for nested routes
        element: <Dashboar />,
      },
      {
        path: "draft", // relative path for nested routes
        element: <Draft />, // Ensure you have this component
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
