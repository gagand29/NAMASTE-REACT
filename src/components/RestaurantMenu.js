import Shimmer from "./Shimmer";

import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, locality, totalRatingsString, costForTwo } =
    resInfo?.data?.cards?.[2]?.card?.card?.info || {};

  const regularCards =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = regularCards.filter(
    (c) => c?.card?.card?.title && c?.card?.card?.itemCards,
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="rounded-xl bg-white shadow-md p-5 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
        <h2 className="text-gray-600">{cuisines?.join(", ")}</h2>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
          <span>{locality}</span>
          <span>⭐ {totalRatingsString}</span>
          <span>{costForTwo}</span>
        </div>
      </div>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex(index === showIndex ? null : index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;