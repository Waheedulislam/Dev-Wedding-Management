import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="container mx-auto  navbar bg-base-100">
            {/* phone  */}
            <div className="navbar-start ">

                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm z-40 dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow">
                        <li><Link to='/about' >About</Link></li>
                        <li>
                            <a>Events</a>
                            <ul className="p-2">
                                <li> <Link to='weedingHome'>Weeding Event</Link></li>
                                <li> <Link >Upcoming</Link></li>

                            </ul>
                        </li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>

                </div>
                <div className="text-4xl font-bold space-x-2 navbar-end">
                    <span>Event</span>
                    <span className=" text-blue-500">Lunchpad</span>
                </div>
            </div>

            {/* computer  */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal z-40 px-1">
                    <li>
                        <details>
                            <summary >Event</summary>
                            <ul className="p-1 ">
                                <li className="py-2"><Link className="px-12 text-nowrap text-xl font-semibold" to='weedingHome'>Weeding Event</Link></li>
                                <li ><Link className="px-12 text-nowrap text-xl font-semibold" >Upcoming</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to='/about' >About</Link></li>

                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>

        </ div>

    );
};

export default Navbar;