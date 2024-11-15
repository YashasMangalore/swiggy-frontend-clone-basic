import React, { useEffect, useState } from "react";
import { SWIGGY_HOME_API } from "../Utils/Constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./ImageSlider";
import RestaurantsList from "./RestaurantsList";
import Shimmer from "./Shimmer";


const Food = () => {
  const [data, setData] = useState([])// setRestaurantData;)
  const [images,setImages]=useState([])

  useEffect(() => {
    const getData = async () => {
      const data2 = await fetch(SWIGGY_HOME_API)
      const json = await data2.json()
      setData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      // console.log(json);
      setImages(json.data.cards[0].card.card.gridElements.infoWithStyle.info)
    }
    getData()
  },[])

  return data.length ? (
    <div>
      <ImageSlider data={images} />
      <RestaurantsList data={data} />
    </div>
  ) : (
    <div>
      <Shimmer />
    </div>
  );

};

export default Food;
