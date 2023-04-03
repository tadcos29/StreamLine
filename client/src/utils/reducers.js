import { useReducer } from 'react';
import {
  // ADD_TO_CART,
  // UPDATE_CART_QUANTITY,
  // REMOVE_FROM_CART,
  // ADD_MULTIPLE_TO_CART,
  // UPDATE_CATEGORIES,
  // UPDATE_CURRENT_CATEGORY,
  // CLEAR_CART,
  // TOGGLE_CART,
  TOGGLE_LOG,
  EDIT_MODE,
  SET_UE_EVENT,
  SET_OE_EVENT,
  SET_CURRENT_PURCHASE,
  CLEAR_CURRENT_PURCHASE

} from './actions';

const initialState = {
  UESelectedEvent: {}
};
// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    // Returns a copy of state with an update products array. We use the action.products property and spread it's contents into the new array.
  
    case TOGGLE_LOG:
      if (!state.toggledy) {state.toggledy=false}
      console.log('intoggle');
      let newToggle=(!state.toggledy);
      console.log('intoggle'+state.toggledy);
      return {
        ...state,
        toggledy: newToggle
          };
          case EDIT_MODE:
            if (!state.editMode) {state.editMode=true}
            console.log('inedit');
            let newEMState=(!state.editMode);
            console.log('inedit'+state.editMode);
            return {
              ...state,
              editMode: newEMState
                };
          
    
    case SET_UE_EVENT: 
    if (!state.UESelectedEvent) {state.UESelectedEvent=false}
      console.log('insetue');
      console.log(action.payload);
      return {
        ...state,
        UESelectedEvent: action.payload
          };
    case SET_OE_EVENT: 
    if (!state.OESelectedEvent) {state.OESelectedEvent=false}
      console.log('insetoe');
      console.log(action.payload);
      return {
        ...state,
        OESelectedEvent: action.payload
          };
    case SET_CURRENT_PURCHASE: 
    if (!state.currentPurchase) {state.currentPurchase=false}
      // console.log('incurrp');
      console.log(action.payload);
      return {
        ...state,
        currentPurchase: action.payload
          };
    case CLEAR_CURRENT_PURCHASE: 
    if (!state.currentPurchase) {state.currentPurchase=false}
      console.log('incllrp');
      console.log(action.payload);
      return {
        ...state,
        currentPurchase: {}
          };

        
    // case ADD_TO_CART:
    //   return {
    //     ...state,
    //     cartOpen: true,
    //     cart: [...state.cart, action.product],
    //   };
    // case ADD_MULTIPLE_TO_CART:
    //   return {
    //     ...state,
    //     cart: [...state.cart, ...action.products],
    //   };
    // // Returns a copy of state, sets the cartOpen to true and maps through the items in the cart.
    // // If the item's `id` matches the `id` that was provided in the action.payload, we update the purchase quantity.
    // case UPDATE_CART_QUANTITY:
    //   return {
    //     ...state,
    //     cartOpen: true,
    //     cart: state.cart.map((product) => {
    //       if (action._id === product._id) {
    //         product.purchaseQuantity = action.purchaseQuantity;
    //       }
    //       return product;
    //     }),
    //   };

    // // First we iterate through each item in the cart and check to see if the `product._id` matches the `action._id`
    // // If so, we remove it from our cart and set the updated state to a variable called `newState`
    // case REMOVE_FROM_CART:
    //   let newState = state.cart.filter((product) => {
    //     return product._id !== action._id;
    //   });

    //   // Then we return a copy of state and check to see if the cart is empty.
    //   // If not, we set the cartOpen status to  `true`. Then we return an updated cart array set to the value of `newState`.
    //   return {
    //     ...state,
    //     cartOpen: newState.length > 0,
    //     cart: newState,
    //   };

    // case CLEAR_CART:
    //   return {
    //     ...state,
    //     cartOpen: false,
    //     cart: [],
    //   };

    // case TOGGLE_CART:
    //   return {
    //     ...state,
    //     cartOpen: !state.cartOpen,
    //   };

    // case UPDATE_CATEGORIES:
    //   return {
    //     ...state,
    //     categories: [...action.categories],
    //   };

    // case UPDATE_CURRENT_CATEGORY:
    //   return {
    //     ...state,
    //     currentCategory: action.currentCategory,
    //   };

    // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
    // This saves us from a crash.
    default:
      return state;
  }
};

export function useMainReducer(initialState) {
  return useReducer(reducer, initialState);
}
