import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10">
                {/* Logo Section */}
                <div className="logo-container">
                    <Link to="/">
                        <img className="w-24 md:w-32" src={LOGO_URL} alt="App Logo" />
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center space-x-8 font-semibold text-xl ">
                    <span className={`flex items-center space-x-1 ${onlineStatus ? "text-green-500" : "text-red-500"}`}>
                        <span>{onlineStatus ? "✅" : "🔴"}</span>
                        <span>{onlineStatus ? "Online" : "Offline"}</span>
                    </span>
                    <Link to="/" className="hover:text-green-500 transition duration-300">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-green-500 transition duration-300">
                        About Us
                    </Link>
                    <Link to="/contact" className="hover:text-green-500 transition duration-300">
                        Contact Us
                    </Link>
                </nav>

                {/* Cart and User Section */}
                <div className="flex items-center space-x-4 md:space-x-6">
                    {/* Cart Icon with Badge */}
                    <Link to="/cart" className="relative flex items-center text-gray-700 hover:text-orange-500 transition duration-300">
                        <span className="text-2xl">🛒</span>
                        {cartItems.length > 0 && (
                            <span className="absolute top-0 right-0 w-5 h-5 text-xs font-semibold bg-red-600 text-white rounded-full flex items-center justify-center">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>

                    {/* Logged-in User */}
                    {loggedInUser && (
                        <span className="hidden md:block text-gray-700 font-medium truncate">
                            {loggedInUser}
                        </span>
                    )}
                       

                    {/* Login/Logout Button */}
                    <Link to="/grocery">
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all duration-300"
                            onClick={() => setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
                        >
                            {btnNameReact}
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-gray-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
