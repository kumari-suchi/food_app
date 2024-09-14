import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return (
            <h1 className="text-center text-red-600 mt-20 text-xl">
                You are offline! Please check your internet connection.
            </h1>
        );
    }

    const { loggedInUser, setUserInfo } = useContext(UserContext);

    return listOfRes.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="p-4 bg-gray-50 min-h-screen">
            {/* Sticky Header */}
            <div className="sticky top-0 bg-white z-10 shadow-sm py-4 px-4">
                {/* Search & Filter Section */}
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Search Box */}
                    <div className="flex items-center w-full md:w-auto">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-full p-3 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="Search for restaurants or cuisines"
                        />
                        <button
                            className="ml-4 px-4 py-3 bg-slate-800 text-white rounded-full hover:bg-orange-600 transition-all duration-300"
                            onClick={() => {
                                const filteredRes = listOfRes.filter((res) =>
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setFilteredRestaurant(filteredRes);
                            }}
                        >
                            Search
                        </button>
                    </div>

                    {/* Top Rated Button */}
                    <button
                        className="px-6 py-3 bg-slate-800 text-white rounded-full hover:bg-green-600 transition-all duration-300"
                        onClick={() => {
                            const filteredList = listOfRes.filter((res) => res.info.avgRating > 4);
                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Top Rated
                    </button>

                    {/* User Info */}
                    <div className="flex items-center space-x-4">
                        <label className="font-semibold text-gray-700">UserName:</label>
                        <input
                            className="border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                            value={loggedInUser}
                            onChange={(e) => setUserInfo(e.target.value)}
                            placeholder="Enter username"
                        />
                    </div>
                </div>
            </div>

            {/* Restaurant Cards */}
            <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-slate-600 transition-shadow duration-300">
                            <RestaurantCard resData={restaurant} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
