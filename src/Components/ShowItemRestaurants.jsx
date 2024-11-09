import { CATEGORY_API1, CATEGORY_API2 } from "../Utils/Constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodItem from "./FoodItem";

const ShowItemRestaurants = () => {
  // const categoryObject = useSelector((store) => store.category);  redux but not needed
  // const API = categoryObject[0].action.link
  // let id = API.slice(35, 40)
  const { query } = useParams();
  const [data, setData] = useState([])
  // console.log(data)

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(CATEGORY_API1 + query + CATEGORY_API2);
      const json = await data.json();
      setData(json.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards.slice(1));//? if undefined . then breaks to avoid ? && 0 not correct data
    };
    getData();
  }, [query]);

  // let API=categoryObject.action.link
  return (<div>
    {data && data.map((item) => {
      return <FoodItem key={item.card.card.info.id} data={item.card.card.info} />
    })}
  </div>)
};

export default ShowItemRestaurants;
