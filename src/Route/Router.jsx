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
import MenuPlanner from "../Pages/MainHomePage/WeedingHomePage/MenuPlanner/MenuPlanner";

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
        path: "/weedingHome/MenuPlanner", // Updated path
        element: <MenuPlanner></MenuPlanner>,
      },
    ],
  },
]);

export default router;
