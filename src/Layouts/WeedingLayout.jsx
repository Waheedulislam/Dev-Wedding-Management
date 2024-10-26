import { Outlet } from "react-router-dom";
import WeedingNavbar from "../Components/Shared/WeedingFooterAndNavbar/WeedingNavbar";
import WeedingFooter from "../Components/Shared/WeedingFooterAndNavbar/WeedingFooter";


const WeedingLayout = () => {
    return (
        <div>
            <WeedingNavbar />
            <Outlet />
            <WeedingFooter />
        </div>
    );
};

export default WeedingLayout;