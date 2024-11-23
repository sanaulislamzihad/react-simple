/* eslint-disable react/prop-types */


const Header = ({coins}) => {
    return (
        <div className="sticky top-0 z-50 border-b bg-white">
            <div className="container w-11/12 mx-auto">
                <div className="navbar bg-base-100 items-center">
                    <div className="navbar-start">
                        <div className="dropdown">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Team</a></li>
                            <li><a>Players</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                        </div>
                        <a className="md:mx-auto lg:mx-0 md:ml-60 lg:ml-0">
                            <img src="https://i.ibb.co.com/7XDZVcq/logo.png" alt="Cricket Club" className="w-14 md:w-auto" />
                        </a>

                        

                    </div>
                    <div className="navbar-end">
                        <div className=" hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><a>Home</a></li>
                                <li><a>Team</a></li>
                                <li><a>Players</a></li>
                                <li><a>Schedules</a></li>
                            </ul>
                        </div>
                        
                        <div className="">
                            <a className="btn bg-white hover:bg-white border border-gray-300">{coins} Coin <img src="https://img.icons8.com/?size=30&id=NI2jd8758Cc4&format=png" alt="" /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;