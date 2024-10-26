import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/MainHomeFooterAndNav/Navbar/Navbar";
import Footer from "../Components/Shared/MainHomeFooterAndNav/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;