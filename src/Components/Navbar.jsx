import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // const [cartCount, setCartCount] = useState(3); // Example cart count
  const cartArray = useSelector(store => store.cart)
  const navigate=useNavigate()
  
  let num = 0;
  for (let item of cartArray)
  {
    num+=item.quantity
  }

  return (
    <div>
      <div className="flex bg-transparent justify-between p-4 items-center">
        <div>
          <img src="./images/logo.jpg" className="w-14" alt="Logo" />
        </div>

        <div className="flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/About">About us</Link>
          <Link to="/Contact">Contact</Link>
        </div>

        <div onClick={() => {
          navigate("/cart")
        }} className="relative">
          {cartArray.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
            {num}
          </span>}
          <span role="img" aria-label="cart">
            🛒
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
