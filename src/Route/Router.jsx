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
    path: "/weeding",
    element: <WeedingLayout />,
    children: [
      {
        path: "/weeding/weedingHome",
        element: <WeedingMainHomePage />,
      },
      {
        path: "/weeding/services",
        element: <Services />,
      },
      {
        path: "/weeding/weedingTeam", // Updated path
        element: <WeedingTeam />,
      },
      {
        path: "/weeding/weedingPrice", // Updated path
        element: <WeedingPricing />,
      },
      {
        path: "/weeding/weedingBlogs", // Updated path
        element: <WeedingBlogs />,
      },
      {
        path: "/weeding/weedingBlogs/:id",
        element: <BlogDetails />,
      },
      {
        path: "/weeding/weedingAbout",
        element: <WeedingAbout />,
      },
      {
        path: "/weeding/MenuPlanner", // Updated path
        element: <MenuPlanner />,
      },
      {
        path: "/weeding/Testimonial",
        element: <Testimonial />,
      },
      {
        path: "/weeding/Reservation",
        element: <WeedingReservation />,
      },
      {
        path: "/weeding/Login",
        element: <Login />,
      },
      {
        path: "/weeding/Register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
