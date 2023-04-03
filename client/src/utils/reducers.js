import { useReducer } from 'react';
import {

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
export const reducer = (state, action) => {
  switch (action.type) {
  
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
            if (!state.editMode) {state.editMode=false}
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
    default:
      return state;
  }
};

export function useMainReducer(initialState) {
  return useReducer(reducer, initialState);
}
