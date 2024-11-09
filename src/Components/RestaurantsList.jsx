import React from "react";
import { CLOUDINARY_URL } from "../Utils/Constants";
import { useNavigate } from "react-router-dom";

const RestaurantsList = ({ data }) => {
  // console.log(data);
  const navigate=useNavigate()

  return (
    <div className="grid grid-cols-4 mt-28 w-[90%] mx-auto">
      {data &&
        data.map((item) => {
          return (
            <div key={item.info.id} onClick={() => {
              navigate(`/menu/${item.info.id}`);
            }} className="border w-fit p-6 flex flex-col rounded-xl mt-8 bg-slate-100">
              <img
                className="w-56 h-4/6"
                src={CLOUDINARY_URL + item.info.cloudinaryImageId}
                alt=""
              />
              <div className="mt-8">
                <h3 className="font-bold">
                  {item.info.name.length <= 24
                    ? item.info.name
                    : item.info.name.slice(0,22)+"..."}
                </h3>
                <h4>{item.info.locality}</h4>
                <p>{item.info.avgRating}⭐</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RestaurantsList;
