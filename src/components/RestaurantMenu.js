import Shimmer from "./Shimmer";

import {useParams} from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);


  if (resInfo === null) {
    return <Shimmer />;
  }

  const { areaName, cuisines, locality, totalRatingsString,costForTwo } =
  resInfo?.data?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card?.itemCards || [];

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="rounded-xl bg-white shadow-md p-5 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{areaName}</h1>
        <h2 className="text-gray-600">{cuisines?.join(", ")}</h2>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
          <span>{locality}</span>
          <span>⭐ {totalRatingsString}</span>
          <span>{costForTwo}</span>
        </div>
      </div>

      <ul className="divide-y divide-gray-200 rounded-xl bg-white shadow-md">
        {itemCards.map((item) => (
          <li
            key={item.card.info.id}
            className="flex justify-between items-center px-5 py-3"
          >
            <span className="text-gray-700">{item.card.info.name}</span>
            <span className="font-medium text-gray-800">
              ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;