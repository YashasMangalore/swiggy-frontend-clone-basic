import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="border">
      <div className="flex flex-wrap justify-around mt-20 space-x-4">
        <div
          onClick={() => navigate("/food")}
          className="max-w-xs m-2 p-4 bg-white shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          <img
            className="w-full h-48 object-cover rounded-lg"
            src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS"
            alt="Food"
          />
          <h3 className="mt-2 text-lg font-semibold">Food</h3>
        </div>

        <div
          onClick={() => navigate("/restaurant")}
          className="max-w-xs m-2 p-4 bg-white shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          <img
            className="w-full h-48 object-cover rounded-lg"
            src="https://elledecor.in/wp-content/uploads/2023/12/H1_RL_CRAYCRAFT.jpg"
            alt="Restaurant"
          />
          <h3 className="mt-2 text-lg font-semibold">Restaurant</h3>
        </div>

        <div
          onClick={() => navigate("/grocery")}
          className="max-w-xs m-2 p-4 bg-white shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          <img
            className="w-full h-48 object-cover rounded-lg"
            src="https://thumbs.dreamstime.com/b/wicker-basket-assorted-grocery-products-wicker-basket-assorted-grocery-products-including-fresh-vegetables-fruits-208406376.jpg"
            alt="Grocery"
          />
          <h3 className="mt-2 text-lg font-semibold">Grocery</h3>
        </div>

        <div
          onClick={() => navigate("/random")}
          className="max-w-xs m-2 p-4 bg-white shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          <img
            className="w-full h-48 object-cover rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3thj-XJCBPqFbrE-DCGasBw4tb14SBkBntw&s"
            alt="To be decided"
          />
          <h3 className="mt-2 text-lg font-semibold">To be decided</h3>
        </div>
      </div>
    </div>
  );
};

export default Landing;
