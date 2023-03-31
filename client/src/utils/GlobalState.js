import React, { createContext, useContext } from "react";
import { useMainReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const MainProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useMainReducer({

  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useMainContext = () => {
  return useContext(StoreContext);
};

export { MainProvider, useMainContext };
