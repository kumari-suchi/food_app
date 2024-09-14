import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
            {/* Restaurant Image */}
            <img
                src={CDN_URL + resData.info.cloudinaryImageId}
                alt={resData.info.name}
                className="w-full h-48 object-cover"
            />

            {/* Restaurant Info */}
            <div className="p-4">
                <h3 className="font-semibold text-xl text-gray-800 truncate">{resData.info.name}</h3>
                <p className="text-sm text-gray-600 mt-2 truncate">{resData.info.cuisines.join(", ")}</p>
                <p className="text-xs text-gray-500 mt-1">{resData.info.locality}</p>

                {/* Rating and Delivery Time */}
                <div className="flex justify-between items-center mt-4">
                    {/* Rating Badge */}
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${resData.info.avgRating >= 4 ? 'bg-green-500 text-white' : 'bg-yellow-400 text-white'}`}>
                        {resData.info.avgRating} ★
                    </span>

                    {/* Delivery Time */}
                    <span className="text-sm font-semibold text-gray-700">
                        {resData.info.sla.deliveryTime} mins
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
