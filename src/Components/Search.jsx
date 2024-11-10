import React, { useEffect, useState } from "react";
import { SEARCH_API2, SEARCH_API1 } from "../Utils/Constants";
import FoodItem from "./FoodItem";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../Utils/SearchSlice";

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch()
  const searchDataSlice=useSelector(store=>store.search)//useselector to subscribe to store; store prop

  useEffect(() => {
    const getData = async () => {
      if (query.trim() === "") {
        setShowLoader(false); // Hide loader if no query
        setSearchData([]); // Clear previous results if any
        return;
      }

      const foundItem = searchDataSlice.find((item) => {
        return item.query==query
      })
      if (foundItem)
      {
        setSearchData(foundItem.data)
        return
      }

      setShowLoader(true); // Show loader before data fetch
      const data = await fetch(SEARCH_API1 + query + SEARCH_API2);
      const json = await data.json();
      // console.log(json);
      setSearchData(json.data.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards?.slice(1));
      dispatch(addData( { query: query, data: json.data.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards?.slice(1) }))
      setShowLoader(false); // Hide loader after data is fetched
    };
    getData();
  }, [count]);

  return (
    <div className="p-5">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded-l-lg py-2 px-4 w-80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="What do you desire?"
        />
        <button
          onClick={() => {
            setSearchData([]);
            setShowLoader(true);
            setCount(count + 1);
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-lg transition duration-200"
        >
          🔍
        </button>
      </div>

      <div>
        {searchData.length
          ? searchData.map((item) => (
              <FoodItem
                key={item.card.card.info.id}
                data={item.card.card.info}
              />
            ))
          : showLoader && <Loader />}
      </div>
    </div>
  );
};

export default Search;

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};
