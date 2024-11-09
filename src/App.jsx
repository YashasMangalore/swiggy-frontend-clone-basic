import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './Components/Landing'
import Food from './Components/food';
import Restaurant from './Components/restaurant';
import Grocery from './Components/grocery';
import Random from './Components/random';
import Navbar from './Components/Navbar';
import ShowItemRestaurants from './Components/ShowItemRestaurants';
import { Provider } from 'react-redux';
import store from './Utils/Store';
import RestaurantMenu from './Components/RestaurantMenu';
import Cart from './Components/Cart';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="" element={<Landing />} />
          <Route path="/food" element={<Food />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/random" element={<Random />} />
          <Route path="/showitems/:query" element={<ShowItemRestaurants />} />
          <Route path="/menu/:id" element={<RestaurantMenu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App