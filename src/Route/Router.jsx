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

const router = createBrowserRouter([
  // Main Home Page Route
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  // Weeding Page Route
  {
    path: "/weedingHome",
    element: <WeedingLayout />,
    children: [
      {
        path: "/weedingHome",
        element: <WeedingMainHomePage />,
      },
      {
        path: "/weedingHome/services",
        element: <Services />,
      },
      {
        path: "/weedingHome/weedingTeam", // Updated path
        element: <WeedingTeam />,
      },
      {
        path: "/weedingHome/weedingPrice", // Updated path
        element: <WeedingPricing />,
      },
      {
        path: "/weedingHome/weedingBlogs", // Updated path
        element: <WeedingBlogs />,
      },
      {
        path: "/weedingHome/weedingBlogs/:id",
        element: <BlogDetails />,
      },
      {
        path: "/weedingHome/weedingAbout",
        element: <WeedingAbout />,
      },
      {
        path: "/weedingHome/MenuPlanner", // Updated path
        element: <MenuPlanner />,
      },
      {
        path: "/weedingHome/Testimonial",
        element: <Testimonial />,
      },
      {
        path: "/weedingHome/Reservation",
        element: <WeedingReservation />,
      },
    ],
  },
]);

export default router;
