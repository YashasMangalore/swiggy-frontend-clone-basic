import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLOUDINARY_URL } from "../Utils/Constants";
import { addItem, emptyCart, removeItem } from "../Utils/CartSlice";

const Cart = () => {
  const cartData = useSelector((store) => store.cart);
  const dispatch = useDispatch()
  const[orderPlaced,setOrderPlaced]=useState(false)

  let total = 0;
  for (let item of cartData)
  {
    total+=item.quantity*((item.defaultPrice || item.price) / 100)
  }

  return cartData.length ? (
    <div className="p-6 max-w-6xl mx-auto">
      {cartData.map((item) => {
        const finalPrice = (item.defaultPrice || item.price) / 100;
        const {name, price, defaultPrice, imageId, description}=item
        return (
          <div
            key={item.id}
            className="flex items-center mx-auto bg-white shadow-md rounded-lg p-4 mb-4"
          >
            <img
              src={CLOUDINARY_URL + item.imageId}
              alt={item.name}
              className="w-24 h-24 rounded-lg object-cover mr-4"
            />
            <div className="flex justify-between w-full">
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {item.name}
                </p>
                <p className="text-gray-600">₹{price}</p>
                <p className="w-[70%] text-sm text-gray-500">
                  {item.description}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    dispatch(
                      addItem({
                        name,
                        price,
                        defaultPrice,
                        imageId,
                        description,
                      })
                    );
                  }}
                  className="px-3 py-1 bg-green-600 text-white rounded-lg"
                >
                  +
                </button>
                
                <button
                  onClick={() => {
                    dispatch(removeItem({ description }));
                  }}
                  className="ml-4 px-3 py-1 bg-red-600 text-white rounded-lg"
                >
                  -
                </button>
              </div>

              <div className="text-right flex items-center min-w-[20%] ml-12">
                <p className="text-gray-700 font-semibold">
                  {finalPrice} x {item.quantity} = ₹
                  {(finalPrice * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <Bill setter={setOrderPlaced} total={total} />
    </div>
  ) : (
    orderPlaced?<PlaceOrder/>:<Empty />
  );
};

export default Cart;

function Empty() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-semibold text-gray-600">
        Your cart is empty.
      </h1>
    </div>
  );
}

function Bill({ total, setter }) {
  const dispatch = useDispatch()
  return (
    <div className="border border-gray-300 p-6 rounded-lg text-center max-w-sm mx-auto bg-gray-50">
      <p className="text-2xl font-bold mb-6 text-gray-800">Total:  ₹ {total}</p>
      <button onClick={() => {
        setter(true)
        dispatch(emptyCart())
      }} className="px-6 py-2 text-lg bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none transition-colors">
        Checkout
      </button>
    </div>
  );
}

function PlaceOrder() {
  return (
    <div className="p-10 text-center flex flex-col items-center space-y-6">
      <div className="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full p-6 shadow-lg animate-pulse">
        <svg
          className="w-12 h-12 text-white animate-spin-slow"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6 0a9 9 0 11-9-9"
          />
        </svg>
      </div>
      <h1 className="text-2xl font-semibold text-gray-700 animate-bounce">
        Order placed! Your food will reach soon
      </h1>
      <p className="text-gray-500 text-sm italic animate-fade-in">
        Thank you for choosing us! Bon Appétit 🍽️
      </p>
    </div>
  );
}

