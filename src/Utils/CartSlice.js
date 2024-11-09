import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  // initialState: null,or
  reducers: {
    emptyCart(state, action) {
      return []
    },

    addItem: (state, action) =>
    {
      //return action.payload;or
      // state.pop();
      // state.push(action.payload);
      let foundItem=state.find((item) => {
        return item.description==action.payload.description
      })

      if (!foundItem)
      {
        state.push({ ...action.payload, quantity: 1 }); //object so spread operator
      }
      else
      {
        foundItem.quantity++;//reference so if increased then increases in original item
      }
    },

    removeItem: (state, action) => {
      let foundItem=state.find((item) => {
        return item.description==action.payload.description
      })

      if (foundItem)
      {
        if (foundItem.quantity > 1)
        {
          foundItem.quantity--;
        }
        else
        {
          let newArr = state.filter((item) => {
            return item!=foundItem
          })

          return newArr
        }
      }
    }
  }
});

export default cartSlice.reducer;
export const { addItem, removeItem, emptyCart } = cartSlice.actions;