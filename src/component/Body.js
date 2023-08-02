import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0171794&lng=76.954584&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const handleRated = () => {
    console.log("clicked");
    const filteredRestaurant = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurant(filteredRestaurant);
  };
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="input-box"
          onChange={handleChange}
          value={searchText}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log("searchbutton");
            const filteredRestaurant = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button className="filter-btn" onClick={handleRated}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info.id}
            resData={restaurant?.info}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
