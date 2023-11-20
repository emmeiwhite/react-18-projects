import { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import cartItems from "./data";

import {
  CLEAR_CART,
  INCREASE,
  DECREASE,
  LOADING,
  REMOVE,
  DISPLAY_ITEMS,
} from "./actions";
import { getTotals } from "./utils";

// Step-1: We create a context
const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};
// Step-2: We make our provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Getting totals
  const { totalAmount, totalCost } = getTotals(state.cart);

  // Let's create functions to be used everywhere in our application

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Step-3:  Custom Global Context
export const useGlobalContext = () => {
  return useContext(AppContext);
};
