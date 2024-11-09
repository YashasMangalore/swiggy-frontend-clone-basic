import React, { useState } from 'react'
import FoodItem from './FoodItem'

const SubMenu = ({ arr, title }) => {
  const[show,setShow]=useState(false)
  return (
    <div className="flex flex-col items-center">
      <div onClick={() => {
          setShow(!show);
        }} className="flex items-center justify-between px-4 border mt-5 font-bold h-14 w-6/12">
        {title} <span>{show ? "⬆️" : "⬇️"}</span>
      </div>
      {show &&
        arr &&
        arr.map((item) => {
          return <FoodItem data={item.card.info} />;
        })}
    </div>
  );
}

export default SubMenu