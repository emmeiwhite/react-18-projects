import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);

    // No Filter required when working on the Map()
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    // No Filter required when working on the Map()

    const itemId = action.payload.id;

    const item = newCart.get(itemId);
    console.log(item);

    const newItem = { ...item, amount: item.amount + 1 };
    console.log("NEW ITEM IS:");
    console.log(newItem);

    // With maps we simply use set() function to set both key and value
    newCart.set(itemId, newItem);

    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    // No Filter required when working on the Map()
    const itemId = action.payload.id;
    const item = newCart.get(itemId);

    if (item.amount === 1) {
      newCart.delete(itemId);
      return { ...state, cart: newCart };
    }

    const newItem = { ...item, amount: item.amount - 1 };

    // With maps we simply use set() function to set both key and value
    newCart.set(itemId, newItem);

    return { ...state, cart: newCart };
  }

  // return state;
  throw new Error(`no matching action type: ${action.type}`);
};

export default reducer;
