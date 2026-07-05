import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";

import {useParams} from "react-router";

const RestaurantMenu = () => {
const {resId} = useParams();

  const [resInfo, setResInfo] = useState(null)

  useEffect(()=>{
      fetchMenu();
  },[])

  const fetchMenu = async () =>{
   const data = await fetch(MENU_API+(resId));
   const json =await data.json();
   console.log(json);
   setResInfo(json);

  };


  if (resInfo === null) {
    return <Shimmer />;
  }

  const { areaName, cuisines, locality, totalRatingsString,costForTwo } =
  resInfo?.data?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card?.itemCards || [];

  return (
    <div className="res-menu">
      <h1>{areaName}</h1>
      <h1>{cuisines?.join(", ")}</h1>
      <h1>{locality}</h1>
      <h1>{totalRatingsString}</h1>
      <h1>{costForTwo}</h1>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;