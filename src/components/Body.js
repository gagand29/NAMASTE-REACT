import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);



  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurants");
    //fetch will return promise
    const json = await data.json();

    // optional chaining
    const restaurants =
      json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 className="text-center text-xl font-semibold text-gray-700 mt-10">
        Looks like you are offline bro
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <button
          className="px-4 py-2 rounded-lg bg-orange-500 text-white font-medium shadow hover:bg-orange-600 transition-colors"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4,
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top rated Restaurant
        </button>

        <div className="flex gap-2">
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-3 py-2 w-56 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 rounded-lg bg-gray-800 text-white font-medium shadow hover:bg-gray-900 transition-colors"
            onClick={() => {
              const searchResults = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurant(searchResults);
            }}
          >
            search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
