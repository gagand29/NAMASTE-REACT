import { useState } from "react";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const [imgError, setImgError] = useState(false);

  if (!resData) return null;

  const {
    name,
    cuisines = [],
    avgRating,
    sla,
    cloudinaryImageId,
    costForTwo,
  } = resData;

  const showImage = cloudinaryImageId && !imgError;

  return (
    <div className="w-64 m-3 rounded-xl bg-white shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
      {showImage ? (
        <img
          className="w-full h-40 object-cover"
          alt={name || "restaurant"}
          src={CDN_URL + cloudinaryImageId}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-40 flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
          No image available
        </div>
      )}

      <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <h4 className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</h4>
        <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
          <span>⭐ {avgRating}</span>
          <span>{costForTwo}</span>
          <span>{sla?.deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
